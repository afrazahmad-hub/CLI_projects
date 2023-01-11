#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";

const sleep = async () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};

const welcome = async () => {
  console.log(chalk.green(figlet.textSync("C a l c u l a t o r   !")));

  let _welcome = chalkAnimation.rainbow("Welcome to Afraz Calculator");
  await sleep();
  _welcome.stop();
};
await welcome();

const askQuestion = async () => {
  let qus = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter 1st number",
    },
    {
      name: "operation",
      type: "list",
      message: "Select any of the following operation",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Remainder",
        "Exponentiation",
        "Power",
      ],
    },
    {
      name: "num2",
      type: "number",
      message: "Enter 2nd number",
    },
  ]);
  let a = qus.num1;
  let b = qus.num2;
  let c = qus.operation;
  if (c == "Addition") {
    console.log(chalk.red(`${a} + ${b} = ${a + b}`));
  } else if (c == "Subtraction") {
    console.log(chalk.red(`${a} - ${b} = ${a - b}`));
  } else if (c == "Multiplication") {
    console.log(chalk.red(`${a} x ${b} = ${a * b}`));
  } else if (c == "Division") {
    console.log(chalk.red(`${a} / ${b} = ${a / b}`));
  } else if (c == "Remainder") {
    console.log(chalk.red(`${a} % ${b} = ${a % b}`));
  } else if (c == "Exponentiation") {
    console.log(chalk.red(`${a} ** ${b} = ${Math.exp(a)}`));
  } else if (c == "Power") {
    console.log(chalk.red(`${a} ^ ${b} = ${Math.pow(a, b)}`));
  }
};

// await askQuestion();

async function runAgain() {
  do {
    await askQuestion();
    var again = await inquirer.prompt({
      name: "restart",
      type: "input",
      message: "Run Again ? (y/n)",
    });
  } while (again.restart == "y" || again.restart == "Y");
}
await runAgain();
