import users from "./users.js";
import inquirer from "inquirer";
import mainscren from "./main_screen.js";

async function login() {
  let answer = await inquirer.prompt([
    {
      name: "accountNUmber",
      type: "number",
      message: "Please enter account number.",
    },
    {
      name: "pin",
      type: "password",
      message: "Please enter passward.",
    },
  ]);

  let user = users.find(
    (x) => x.accountNumber == answer.accountNUmber && x.pin == answer.pin
  );
  if (user !== undefined) {
    console.log(`Welcome ${user.name}`);
    mainscren(user.balance);
  } else {
    console.log("Invalid passward OR account number");
  }
}

export default login;
