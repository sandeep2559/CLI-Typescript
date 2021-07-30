"use strict";
/**
 * Calculate multiplication of two numbers
 * @module multiplication
 * @param {any} firstNum - First number
 * @param {any} secondNum - Second number
 * @returns {any} - Sum of x and y
 * @example firstNumber secondNumber [(2) * (3)] --> Output: 6
 * @example firstNumber secondNumber [(-2) * (-3)] --> Output: 6
 * @example firstNumber secondNumber [(-2) * (3)] --> Output: -6
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mul = void 0;
function mul(firstNum, secondNum) {
    return firstNum * secondNum;
}
exports.mul = mul;
