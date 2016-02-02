

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var flatten = require('../../utils/flatten');
var markers = require('../../constants/markers');

function printNullableTypeAnnotation(print, node) {
  return flatten(['?', markers.noBreak, print(node.typeAnnotation)]);
}

module.exports = printNullableTypeAnnotation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50TnVsbGFibGVUeXBlQW5ub3RhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBY0EsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDL0MsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7O0FBRW5ELFNBQVMsMkJBQTJCLENBQ2xDLEtBQVksRUFDWixJQUE0QixFQUNyQjtBQUNQLFNBQU8sT0FBTyxDQUFDLENBQ2IsR0FBRyxFQUNILE9BQU8sQ0FBQyxPQUFPLEVBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FDM0IsQ0FBQyxDQUFDO0NBQ0o7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRywyQkFBMkIsQ0FBQyIsImZpbGUiOiJwcmludE51bGxhYmxlVHlwZUFubm90YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7TGluZXMsIFByaW50fSBmcm9tICcuLi8uLi90eXBlcy9jb21tb24nO1xuaW1wb3J0IHR5cGUge051bGxhYmxlVHlwZUFubm90YXRpb259IGZyb20gJ2FzdC10eXBlcy1mbG93JztcblxuY29uc3QgZmxhdHRlbiA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2ZsYXR0ZW4nKTtcbmNvbnN0IG1hcmtlcnMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMvbWFya2VycycpO1xuXG5mdW5jdGlvbiBwcmludE51bGxhYmxlVHlwZUFubm90YXRpb24oXG4gIHByaW50OiBQcmludCxcbiAgbm9kZTogTnVsbGFibGVUeXBlQW5ub3RhdGlvbixcbik6IExpbmVzIHtcbiAgcmV0dXJuIGZsYXR0ZW4oW1xuICAgICc/JyxcbiAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgcHJpbnQobm9kZS50eXBlQW5ub3RhdGlvbiksXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50TnVsbGFibGVUeXBlQW5ub3RhdGlvbjtcbiJdfQ==