"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var addition_1 = require("./addition");
var subtraction_1 = require("./subtraction");
var multiplication_1 = require("./multiplication");
var division_1 = require("./division");
// type Operator = '+' | '-' | '*' | '/';
/**
 * @file index.js is the homepage for this application.
 * @author Sandeep Kumar
 *
 */
console.log('\n--------------WELCOME TO CONSOLE CALCI!..------------------\n');
function main() {
    var firstStr = readline_sync_1.question('Enter first number:\n');
    var secondStr = readline_sync_1.question('Enter second number\n');
    var operator = readline_sync_1.question('Enter the operator:\n');
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput && operator == '+') {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var resultadd = addition_1.add(firstNum, secondNum);
        console.log("Result = " + resultadd);
    }
    else if (validInput && operator == '-') {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var resultsubr = subtraction_1.sub(firstNum, secondNum);
        console.log("Result = " + resultsubr);
    }
    else if (validInput && operator == '*') {
        var firstNum = parseFloat(firstStr);
        var secondNum = parseFloat(secondStr);
        var resultMul = multiplication_1.mul(firstNum, secondNum);
        console.log("Result = " + resultMul);
    }
    else if (validInput && operator == '/') {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var resultDiv = division_1.div(firstNum, secondNum);
        console.log("Result = " + resultDiv);
    }
    else {
        console.log("invalid Input");
        main();
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = Boolean(!isNaN(maybeNum));
    return isNum;
}
main();
