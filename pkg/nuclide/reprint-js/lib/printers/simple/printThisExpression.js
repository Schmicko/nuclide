

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var wrapExpression = require('../../wrappers/simple/wrapExpression');

function printThisExpression(print, node) {
  var wrap = function wrap(x) {
    return wrapExpression(print, node, x);
  };
  return wrap(['this']);
}

module.exports = printThisExpression;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50VGhpc0V4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWNBLElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDOztBQUV2RSxTQUFTLG1CQUFtQixDQUFDLEtBQVksRUFBRSxJQUFvQixFQUFTO0FBQ3RFLE1BQU0sSUFBSSxHQUFHLFNBQVAsSUFBSSxDQUFHLENBQUM7V0FBSSxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7R0FBQSxDQUFDO0FBQ2pELFNBQU8sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztDQUN2Qjs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDIiwiZmlsZSI6InByaW50VGhpc0V4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7TGluZXMsIFByaW50fSBmcm9tICcuLi8uLi90eXBlcy9jb21tb24nO1xuaW1wb3J0IHR5cGUge1RoaXNFeHByZXNzaW9ufSBmcm9tICdhc3QtdHlwZXMtZmxvdyc7XG5cbmNvbnN0IHdyYXBFeHByZXNzaW9uID0gcmVxdWlyZSgnLi4vLi4vd3JhcHBlcnMvc2ltcGxlL3dyYXBFeHByZXNzaW9uJyk7XG5cbmZ1bmN0aW9uIHByaW50VGhpc0V4cHJlc3Npb24ocHJpbnQ6IFByaW50LCBub2RlOiBUaGlzRXhwcmVzc2lvbik6IExpbmVzIHtcbiAgY29uc3Qgd3JhcCA9IHggPT4gd3JhcEV4cHJlc3Npb24ocHJpbnQsIG5vZGUsIHgpO1xuICByZXR1cm4gd3JhcChbJ3RoaXMnXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJpbnRUaGlzRXhwcmVzc2lvbjtcbiJdfQ==