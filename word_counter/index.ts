import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const timeout = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 1000);
  });
};

const welcome = async () => {
  let welcomeNote = chalkAnimation.rainbow(
    "......Word  / Character Counter......"
  );
  await timeout();

  welcomeNote.stop();
};
await welcome();

const counter = async () => {
  let askQues = await inquirer.prompt([
    {
      name: "count",
      type: "list",
      message: "Select one from list",
      choices: ["Count Words", "Count character"],
    },
  ]);

  if (askQues.count == "Count Words") {
    let countWords = await inquirer.prompt([
      {
        type: "input",
        name: "paragraph",
        message: chalk.rgb(
          127,
          147,
          217
        )("Enter paragraph to count the words !"),
      },
    ]);

    let wordCount = countWords.paragraph.split(" ");
    console.log(wordCount);
    console.log(wordCount.length);
  } else {
    let countChar = await inquirer.prompt([
      {
        type: "input",
        name: "character",
        message: chalk.rgb(
          127,
          147,
          217
        )("Enter paragraph to count the characters !"),
      },
    ]);

    // Will include spaces too.
    let charCount = countChar.character.split("");
    // Substitute method. exclude spaces
    let charCount1 = countChar.character.replace(/ /g, "");

    console.log(charCount1);
    console.log(charCount1.length);
  }
};

const runAgain = async () => {
  do {
    await counter();

    var again = await inquirer.prompt({
      name: "replay",
      type: "input",
      message: "Press Y to count again, or N to stop.",
    });
  } while (again.replay == "Y" || again.replay == "y");
};

runAgain();
