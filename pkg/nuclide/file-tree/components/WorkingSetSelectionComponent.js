'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

/*eslint-disable react/prop-types */

import {React, ReactDOM} from 'react-for-atom';
import {CompositeDisposable} from 'atom';
import classnames from 'classnames';

import type {WorkingSetDefinition} from '../../working-sets';
import type {WorkingSetsStore} from '../../working-sets/lib/WorkingSetsStore';


type Props = {
  workingSetsStore: WorkingSetsStore;
  onClose: () => void;
  onEditWorkingSet: (name: string, uris: Array<string>) => void;
};

type State = {
  selectionIndex: number;
  definitions: Array<WorkingSetDefinition>;
};

export class WorkingSetSelectionComponent extends React.Component {
  _disposables: CompositeDisposable;
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    const workingSetsStore = props.workingSetsStore;

    this.state = {
      selectionIndex: 0,
      definitions: workingSetsStore.getDefinitions() || [],
    };

    this._disposables = new CompositeDisposable();

    this._disposables.add(
      workingSetsStore.subscribeToDefinitions(definitions => {
        this.setState({definitions});
        if (definitions.length === 0) {
          this.props.onClose();
        }
      })
    );

    (this: any)._lostFocus = this._lostFocus.bind(this);
    (this: any)._checkFocus = this._checkFocus.bind(this);
    (this: any)._renderDefinition = this._renderDefinition.bind(this);
  }

  componentDidMount(): void {
    const node = ReactDOM.findDOMNode(this);
    node.focus();
    this._disposables.add(atom.commands.add(
      node,
      {
        'core:move-up': () => this._moveSelectionIndex(-1),
        'core:move-down': () => this._moveSelectionIndex(1),
        'core:confirm': () => {
          const def = this.state.definitions[this.state.selectionIndex];
          this._toggleWorkingSet(def.name, def.active);
        },
        'core:cancel': this.props.onClose,
      }
    ));
  }

  componentWillUnmount(): void {
    this._disposables.dispose();
  }

  componentWillUpdate(nextProps: Props, nextState: State): void {
    if (nextState.selectionIndex >= nextState.definitions.length) {
      this.setState({selectionIndex: nextState.definitions.length - 1});
    } else if (nextState.selectionIndex < 0) {
      this.setState({selectionIndex: 0});
    }

  }

  componentDidUpdate(): void {
    const node = ReactDOM.findDOMNode(this);
    node.focus();
  }

  render(): React.Element {
    return (
      <div
        className="select-list"
        tabIndex="0"
        onBlur={this._lostFocus}>

        <ol className="list-group mark-active">
          {this.state.definitions.map(this._renderDefinition)}
        </ol>
      </div>
    );
  }

  _renderDefinition(def: WorkingSetDefinition, index: number): React.Element {
    const classes = {
      active: def.active,
      selected: index === this.state.selectionIndex,
      clearfix: true,
    };

    return (
      <li
        className={classnames(classes)}
        onMouseOver={() => this.setState({selectionIndex: index})}
        onClick={() => this._toggleWorkingSet(def.name, def.active)}
        key={def.name}>
        <div className="btn-group pull-right">
          <button
            className="btn icon icon-trashcan"
            onClick={event => {
              this.props.workingSetsStore.deleteWorkingSet(def.name);
              event.stopPropagation();
            }}
            tabIndex="-1"
          />
          <button
            className="btn icon icon-pencil"
            tabIndex="-1"
            onClick={event => {
              this.props.onEditWorkingSet(def.name, def.uris);
              event.stopPropagation();
            }}
            onBlur={this._lostFocus}
          />
        </div>
        <span>
          {def.name}
        </span>
      </li>
    );
  }

  _moveSelectionIndex(step: number): void {
    this.setState({selectionIndex: this.state.selectionIndex + step});
  }

  _lostFocus(): void {
    setImmediate(this._checkFocus);
  }

  _checkFocus(): void {
    const node = ReactDOM.findDOMNode(this);
    let element = document.activeElement;
    while (element != null) {
      if (element === node) {
        return;
      }

      element = element.parentElement;
    }

    this.props.onClose();
  }

  _toggleWorkingSet(name: string, active: boolean) {
    if (active) {
      this.props.workingSetsStore.deactivate(name);
    } else {
      this.props.workingSetsStore.activate(name);
    }
  }
}
