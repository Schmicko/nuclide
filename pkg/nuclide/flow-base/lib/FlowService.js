'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type {Observable} from 'rx';

import type {NuclideUri} from '../../remote-uri';

// Diagnostic information, returned from findDiagnostics.
export type Diagnostics = {
  // The location of the .flowconfig where these messages came from.
  flowRoot: NuclideUri;
  messages: Array<Diagnostic>;
};

/*
 * Each error or warning can consist of any number of different messages from
 * Flow to help explain the problem and point to different locations that may be
 * of interest.
 */
export type Diagnostic = Array<SingleMessage>;

export type SingleMessage = {
  path?: NuclideUri;
  descr: string;
  line: number;
  endline: number;
  start: number;
  end: number;
  level: string;
}

export type Loc = {
  file: NuclideUri;
  line: number;
  column: number;
}

// If types are added here, make sure to also add them to FlowConstants.js. This needs to be the
// canonical type definition so that we can use these in the service framework.
export type ServerStatusType =
  'failed' |
  'unknown' |
  'not running' |
  'not installed' |
  'busy' |
  'init' |
  'ready';

export type ServerStatusUpdate = {
  pathToRoot: NuclideUri;
  status: ServerStatusType;
};

export type FlowStartLocation = {
  // Service framework can't serialize Point so we need a slightly different type from the canonical
  // OutlineTree.
  startLine: number;
  startColumn: number;
};

export type FlowOutlineTree = FlowStartLocation & {
  displayText: string;
  children: Array<FlowOutlineTree>;
};

import {FlowRoot} from './FlowRoot';

import {FlowRootContainer} from './FlowRootContainer';
const rootContainer: FlowRootContainer = new FlowRootContainer();

export function dispose(): void {
  rootContainer.clear();
}

export function getServerStatusUpdates(): Observable<ServerStatusUpdate> {
  return rootContainer.getServerStatusUpdates();
}

export function flowFindDefinition(
  file: NuclideUri,
  currentContents: string,
  line: number,
  column: number
): Promise<?Loc> {
  return rootContainer.runWithRoot(
    file,
    root => root.flowFindDefinition(
      file,
      currentContents,
      line,
      column,
    )
  );
}

export function flowFindDiagnostics(
  file: NuclideUri,
  currentContents: ?string
): Promise<?Diagnostics> {
  return rootContainer.runWithRoot(
    file,
    root => root.flowFindDiagnostics(
      file,
      currentContents,
    )
  );
}

export function flowGetAutocompleteSuggestions(
  file: NuclideUri,
  currentContents: string,
  line: number,
  column: number,
  prefix: string,
  activatedManually: boolean,
): Promise<any> {
  return rootContainer.runWithRoot(
    file,
    root => root.flowGetAutocompleteSuggestions(
      file,
      currentContents,
      line,
      column,
      prefix,
      activatedManually,
    )
  );
}

export async function flowGetType(
  file: NuclideUri,
  currentContents: string,
  line: number,
  column: number,
  includeRawType: boolean,
): Promise<?{type: string; rawType: ?string}> {
  return rootContainer.runWithRoot(
    file,
    root => root.flowGetType(
      file,
      currentContents,
      line,
      column,
      includeRawType,
    )
  );
}

export function flowGetOutline(
  currentContents: string,
): Promise<?Array<FlowOutlineTree>> {
  return FlowRoot.flowGetOutline(currentContents);
}

export function allowServerRestart(): void {
  for (const root of rootContainer.getAllRoots()) {
    root.allowServerRestart();
  }
}
