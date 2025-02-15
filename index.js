//Packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import colors from "colors";
import generateMarkdown from "./util/generateMarkdown.js";

//Array of questions for user input.
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?".magenta,
  },
  {
    type: "input",
    name: "Description",
    message: "Please briefly describe your project.".magenta,
  },
  {
    type: "input",
    name: "Installation",
    message: "List the installation instructions for the required packages (to be done before running the app).".magenta,
  },
  {
    type: "input",
    name: "Usage",
    message: "Provide instructions or examples of your project in use (can add links to media).".magenta,
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please provide guidelines for others to contribute to the project.".magenta,
  },
  {
    type: "input",
    name: "Tests",
    message: "Please list/describe test instructions.".magenta,
  },
  {
    type: "list",
    name: "License",
    message: "Which license would you like to utilize for this project?".magenta,
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "Github",
    message: "What is your GitHub username?".magenta,
  },
  {
    type: "input",
    name: "Email",
    message: "Please provide your email address and/or other contact information.".magenta,
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