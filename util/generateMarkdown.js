function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license || license === "None") {
    return "";
  }
  return `[License](https://opensource.org/licenses/${license})`;
}

function renderLicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }
  return `## License
  
  This project is licensed under the ${license} license.`;
}

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
  
  To install the necessary packages, follow these steps before running the application:
  
  ${data.Installation}
  
  ## Usage

  To initialize the application:
 
  ${data.Usage}
  
  ${renderLicenseSection(data.License)}
  
  ${renderLicenseBadge(data.License)}
  
  ## Contributing
  
  If you would like to contribute to this project, please follow these guidelines:
 
  ${data.Contributing}
  
  ## Tests
  
  To run tests, follow these instructions:
  
  ${data.Tests}
  
  ## Questions
  
  If you have any questions, please feel free to contact me at:
  - Email: [${data.Email}](mailto:${data.Email})
  - GitHub: [${data.Github}](https://github.com/${data.Github})`;
}

export default generateMarkdown;