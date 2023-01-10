import inquirer from "inquirer";

async function cashDeposit(balance: number) {
  const amount = await inquirer.prompt({
    name: "depositAmount",
    type: "number",
    message: "Enter amount for deposit",
  });

  balance += amount.depositAmount;

  return balance;
}

export default cashDeposit;
