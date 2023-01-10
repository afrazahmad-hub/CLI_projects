import inquirer from "inquirer";

const electricity = Math.ceil(Math.random() * 1000 + 1);
const gas = Math.ceil(Math.random() * 1000 + 1);
const phone = Math.ceil(Math.random() * 1000 + 1);

async function payBill(balance: number) {
  const selectBill = await inquirer.prompt({
    name: "billType",
    type: "list",
    choices: ["Elecricity", "Gas", "Phone"],
    message: "Select bill type",
  });

  if (selectBill.billType === "Elecricity") {
    console.log(`Electricity bill is ${electricity}`);
    balance -= electricity;
  } else if (selectBill.billType === "Gas") {
    console.log(`Gas bill is ${gas}`);
    balance -= gas;
  } else if (selectBill.billType === "Phone") {
    console.log(`Phone bill is ${phone}`);
    balance -= phone;
  }
  return balance;
}

export default payBill;
