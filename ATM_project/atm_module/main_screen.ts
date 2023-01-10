import inquirer from "inquirer";
import cashDraw from "./cash_withdraw.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import payBill from "./utilityBills.js";

async function runAgain() {
  var again = await inquirer.prompt({
    name: "runAgain",
    message: "Enter Yes for continue, or No for stop.",
    type: "list",
    choices: ["Yes", "No"],
  });

  return again.runAgain;
}

async function Mainscren(balance: number) {
  do {
    const options = await inquirer.prompt([
      {
        name: "Dashboard",
        message: "Select an option",
        type: "list",
        choices: [
          "Balance Inquiry",
          "Cash Withdrawl",
          "Cash Deposit",
          "Transfer",
          "Utility Bills",
          "Exit",
        ],
      },
    ]);

    switch (options.Dashboard) {
      case "Balance Inquiry":
        console.log(`Your balance: ${balance}`);
        break;
      case "Cash Withdrawl":
        console.log(`Your current balance is : ${balance}`);
        balance = await cashDraw(balance);
        console.log(`Your remaining balance is : ${balance}`);
        break;
      case "Cash Deposit":
        balance = await cashDeposit(balance);
        console.log(`Deposited successfully, new balance is: ${balance}`);
        break;
      case "Transfer":
        balance = await transfer(balance);
        console.log(`Transfered successfully, remaining is: ${balance}`);
        break;
      case "Utility Bills":
        balance = await payBill(balance);
        console.log(`Bill paid successfully, remaining is: ${balance}`);
        break;
      case "Exit":
        anotherTrans = "No";
        break;
    }
    if (options.Dashboard !== "Exit") {
      var anotherTrans = await runAgain();
    } else if (options.Dashboard == "Exit") {
      console.log("Thank you for using our services .");
    }
  } while (anotherTrans !== "No");
}

export default Mainscren;
