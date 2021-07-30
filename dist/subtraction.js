"use strict";
/**
 * Calculate subtraction of two numbers
 * @module subtraction
 * @param {any} firstNum - First number
 * @param {any} secondNum - Second number
 * @returns {any} - Sum of x and y
 * @example firstNumber secondNumber [(2) - (1)] --> Output: 1
 * @example firstNumber secondNumber [(-2) - (-1)] --> Output:  -1
 * @example firstNumber secondNumber [(-2) - (1)] --> Output: -2
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sub = void 0;
function sub(firstNum, secondNum) {
    return firstNum - secondNum;
}
exports.sub = sub;
