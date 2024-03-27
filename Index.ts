#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000;

let myPin = 12345;
 
let pinAnswer = await inquirer.prompt([
{
    type: "number",
    name: "pin",
    message: "Enter your PIN",
   }
]);
if(pinAnswer.pin === myPin)
    console.log(chalk.greenBright`Correct pincode !!!`)

    let operationAns = await inquirer.prompt([{ 
        type: "list",
        name:"operation",
        message: "select your operation",
        choices:["check", "withdraw", "fast cash"],
    }]);
    
    if(operationAns.operation === "check"){
        console.log(chalk.blueBright`your current balance is ${myBalance}$`)
    } else if(operationAns.operation === "withdraw"){let amountAns = await inquirer.prompt([{
        type:"number",
        name: "amount",
        message: "enter amount to withdraw",
    },]); console.log(chalk.redBright`your remaining amount is ${myBalance - amountAns.amount} `)
    
 }else if(operationAns.operation === "fast cash"){
    let fastcashAns = await inquirer.prompt(
    [
        {
            type:"list",
            name:"fastcash",
            message: "select your cash",
            choices:[1000 , 1500 , 5000 , 10000],       
         },
    ]
 ) ; 
 console.log(chalk.redBright`your remaining amount is ${myBalance - fastcashAns.fastcash} `)
        
   console.log(chalk.greenBright `Thank you...!!`)
} else { console.log(chalk.redBright`Incorrect Pincode ...!!!`);
}
