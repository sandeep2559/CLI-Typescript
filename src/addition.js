"use strict";
// type Operator = '+' | '-' | '*' | '/';
exports.__esModule = true;
exports.add = void 0;
/**
 * Add method which return addition of given two input if all the inputs are number
 * else return "Invalid Input".
 * @module addition
 * @param {number} firstNum - First number
 * @param {number} secondNum - Second number
 * @returns {number} - Sum of x and y
 * @example firstNumber secondNumber [(-5) + (-6)] --> Output: -11
 * @example firstNumber secondNumber [(-5) + (6)] --> Output:  1
 * @example firstNumber secondNumber [(1562356958) + (3625458698)] --> Output: 5187815656
 */
function add(firstNum, secondNum) {
    // if ( typeof firstNum !== 'number' || typeof secondNum !== 'number') {
    //     throw ('You must provide a number.');
    //   }
    return firstNum + secondNum;
}
exports.add = add;
