"use strict";
/**
 * Calculate division of two numbers
 * @module division
 * @param {any} firstNum - First number
 * @param {any} secondNum - Second number
 * @returns {any} - Sum of x and y
 * @example firstNumber secondNumber [(6) / (3)] --> Output: 2
 * @example firstNumber secondNumber [(-6) / (-3)] --> Output: 2
 * @example firstNumber secondNumber [(6) / (0)] --> Output: Infinity
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = void 0;
function div(firstNum, secondNum) {
    // if(secondNum == 0)
    // {
    //     throw "Cannot divide by zero";
    // }
    return firstNum / secondNum;
}
exports.div = div;
