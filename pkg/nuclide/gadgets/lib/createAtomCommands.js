'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type Immutable from 'immutable';
import type Commands from './Commands';

import {CompositeDisposable} from 'atom';
import normalizeEventString from './normalizeEventString';

export default function createAtomCommands(
  gadgets: Immutable.Map,
  appCommands: Commands,
): IDisposable {
  const commands = gadgets
    .valueSeq()
    .flatMap(gadget => ([
      atom.commands.add(
        'atom-workspace',
        formatCommandName(gadget.gadgetId, 'Show'),
        () => appCommands.showGadget(gadget.gadgetId),
      ),
      atom.commands.add(
        'atom-workspace',
        formatCommandName(gadget.gadgetId, 'Hide'),
        () => appCommands.hideGadget(gadget.gadgetId),
      ),
      atom.commands.add(
        'atom-workspace',
        formatCommandName(gadget.gadgetId, 'Toggle'),
        () => appCommands.toggleGadget(gadget.gadgetId),
      ),
    ]))
    .toArray();
  return new CompositeDisposable(...commands);
}

function formatCommandName(gadgetId: string, action: string): string {
  return `${normalizeEventString(gadgetId)}:${normalizeEventString(action)}`;
}
