import { question } from 'readline-sync';
import { add } from './addition';
import { sub } from './subtraction';
import { mul } from './multiplication';
import { div } from './division';

// type Operator = '+' | '-' | '*' | '/';

/**
 * @file index.js is the homepage for this application.
 * @author Sandeep Kumar
 *  
 */

console.log('\n--------------WELCOME TO CONSOLE CALCI!..------------------\n');


function main(): void
{
    let firstStr: string = question('Enter first number:\n');
    let secondStr: string = question('Enter second number\n');
    let operator: string = question('Enter the operator:\n');

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);


    if(validInput && operator=='+')
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const resultadd = add(firstNum , secondNum);
        console.log("Result = " +resultadd);

    }
    else if(validInput && operator=='-')
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const resultsubr = sub(firstNum , secondNum);
        console.log("Result = " +resultsubr);

    }
    else if(validInput && operator=='*')
    {
        const firstNum: number = parseFloat(firstStr);
        const secondNum: number = parseFloat(secondStr);
        const resultMul = mul(firstNum , secondNum);
        console.log("Result = " +resultMul);

    }
    else if(validInput && operator=='/')
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const resultDiv = div(firstNum , secondNum);
        console.log("Result = " +resultDiv);

    }
    else
    {

        console.log("invalid Input");
        main();

    }
}





function isOperator(operator: string):boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;

    }


}


function isNumber(str:string):boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = Boolean(!isNaN(maybeNum));
    return isNum;

}


main();