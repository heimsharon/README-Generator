//Function that returns a license badge based on users choice.
//If there is no license,it will  return an empty string.
function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

//Function that returns the license link.
//If there is no license, it will return an empty string.
function renderLicenseLink(license) {
  if (!license || license === "None") {
    return "";
  }
  return `[License](https://opensource.org/licenses/${license})`;
}

//Function that returns the license section of README.
//If there is no license,it returns an empty string.
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }
  return `## License
  
  This project is licensed under the ${license} license.`;
}

//Function to generate the markdown for the README file.
function generateMarkdown(data) {
  return ` 
  # ${data.Title}
  
  ## Description
  
  ${data.Description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  To install the necessary packages,prior to initializing the application,run the following command/s:${
    data.Installation
  }
  
  ## Usage
  
  To initialize ${data.Usage}
  
  ${renderLicenseSection(data.License)}
  
  ${renderLicenseBadge(data.License)}
  
  ## Contributing
  
  ${data.Contributing}
  
  ## Tests
  
  ${data.Tests}
  
  ## Questions
  
  If you have any questions, please feel free to contact me at ${data.Email}.
  
  You can also find more of my work at [${data.Github}](https://github.com/${
    data.Github
  }).
  `;
}

export default generateMarkdown;
