'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type {Commands} from '../types/Commands';
import type {Gadget} from '../types/Gadget';

import invariant from 'assert';
import {CompositeDisposable} from 'atom';
import createCommands from './createCommands';
import createStateStream from './createStateStream';
import getInitialState from './getInitialState';
import Rx from 'rx';

class Activation {
  _disposables: CompositeDisposable;
  commands: Commands;

  constructor(initialState: ?Object) {
    initialState = getInitialState();
    const action$ = new Rx.Subject();
    createStateStream(action$, initialState);
    this.commands = createCommands(action$);

    this._disposables = new CompositeDisposable(
      action$,
    );
  }

  dispose() {
    this._disposables.dispose();
  }
}

let activation: ?Activation = null;

export function activate(state: ?Object) {
  if (activation != null) {
    return;
  }
  activation = new Activation(state);
}

export function deactivate() {
  if (activation == null) {
    return;
  }
  activation.dispose();
  activation = null;
}

export function consumeGadget(gadget: Gadget) {
  invariant(activation);
  activation.commands.registerGadget(gadget);
}