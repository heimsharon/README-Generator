//Packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
//This is optional;allows for color changes of logged items in the Command-Line.
import colors from "colors";
//Make sure to update the file location for your project.
import generateMarkdown from "./util/generateMarkdown.js";

//Array of questions for user input.
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What would you like to title your project?".magenta,
  },
  {
    type: "input",
    name: "Description",
    message: "Please describe the project.".magenta,
  },
  {
    type: "input",
    name: "Installation",
    message:
      "List/describe installation instructions of the required packages for the project."
        .magenta,
  },
  {
    type: "input",
    name: "Usage",
    message: "How to initialize/utilize your application/code/project.".magenta,
  },
  {
    type: "input",
    name: "Contributing",
    message:
      "Please provide guidelines for others to contribute to the project."
        .magenta,
  },
  {
    type: "input",
    name: "Tests",
    message: "Please list/describe test instructions.".magenta,
  },
  {
    type: "list",
    name: "License",
    message: "Which license you would like to utilize for this project?"
      .magenta,
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "Github",
    message: "What is your GitHub username?.".magenta,
  },
  {
    type: "input",
    name: "Email",
    message:
      "Please provide your an email address and/or other contact information."
        .magenta,
  },
];

//Function to initialize app.
function init() {
  inquirer.prompt(questions).then(
    (answers) => {
      console.log(answers);
      fs.writeFile("README.md", generateMarkdown(answers), (err) =>
        err ? console.error(err.red) : console.log("Success!".green)
      );
    },
    (err) => console.error(err.red)
  );
}
//Initialize the app.
init();
