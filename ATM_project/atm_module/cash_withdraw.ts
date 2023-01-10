import inquirer from "inquirer";

async function OtherAmount(balance: number) {
  const userAmount = await inquirer.prompt({
    name: "givenAmount",
    type: "number",
    message: "Enter amount.",
  });

  if (balance > userAmount.givenAmount) {
    balance -= userAmount.givenAmount;
    console.log(
      `You have drawn ${userAmount.givenAmount}, remaining balance is ${balance}`
    );
  } else {
    console.log("InSufficient balance");
    OtherAmount(balance);
  }
}

async function cashDraw(balance: number) {
  const drawCash = await inquirer.prompt([
    {
      name: "amount",
      message: "Select any option",
      type: "list",
      choices: [500, 1000, 2000, 5000, 10000, "Other amount"],
    },
  ]);

  switch (drawCash.amount) {
    case "500":
      if (balance > Number(drawCash.amount)) {
        balance -= 500;
        break;
      } else {
        console.log("Insufficient Balance !");
      }
    case "1000":
      if (balance > Number(drawCash.amount)) {
        balance -= 1000;
        break;
      } else {
        console.log("Insufficient Balance !");
      }
    case "2000":
      if (balance > Number(drawCash.amount)) {
        balance -= 2000;
        break;
      } else {
        console.log("Insufficient Balance !");
      }
    case "5000":
      if (balance > Number(drawCash.amount)) {
        balance -= 5000;
        break;
      } else {
        console.log("Insufficient Balance !");
      }
    case "10000":
      if (balance > Number(drawCash.amount)) {
        balance -= 10000;
        break;
      } else {
        console.log("Insufficient Balance !");
      }
    case "Other amount":
      await OtherAmount(balance);
      break;
  }
  return balance;
}
export default cashDraw;
