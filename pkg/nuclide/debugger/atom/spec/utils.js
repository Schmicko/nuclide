'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

let nextFileId = 0;

function getUniquePath(): string {
  nextFileId++;
  return `/tmp/nuclide-debugger-BreakpointDisplayControllerTest-spec-${nextFileId}.m`;
}

async function createEditorWithUniquePath(): Promise<atom$TextEditor> {
  const path = getUniquePath();
  return await atom.workspace.open(path);
}

function hasBreakpointDecorationInRow(editor: atom$TextEditor, row: number): boolean {
  return !!getBreakpointDecorationInRow(editor, row);
}

function getBreakpointDecorationInRow(editor: atom$TextEditor, row: number): ?atom$Decoration {
  const decorationArrays = editor.decorationsForScreenRowRange(row, row);
  for (const key in decorationArrays) {
    const decorations = decorationArrays[key];
    for (let i = 0; i < decorations.length; i++) {
      if (decorations[i].getProperties().gutterName === 'nuclide-breakpoint') {
        return decorations[i];
      }
    }
  }
  return null;
}

module.exports = {
  createEditorWithUniquePath,
  getBreakpointDecorationInRow,
  getUniquePath,
  hasBreakpointDecorationInRow,
};
