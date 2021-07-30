

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

function mul(firstNum: number, secondNum: number ): number
{
    return firstNum * secondNum;

}

export {mul};