import inquirer from "inquirer";
async function transfer(balance) {
    const answer = await inquirer.prompt([
        {
            name: "ask_Account",
            type: "number",
            message: " Enter account number",
        },
        {
            name: "ask_Amount",
            type: "number",
            message: "Enter amount",
        },
    ]);
    balance -= answer.ask_Amount;
    return balance;
}
export default transfer;
