// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseResult = "No license.";
  if (license === 'MIT' || license === 'Apache' || license === 'IBM') {
    licenseResult = `![License](https://img.shields.io/badge/license-${license}-green)`
  }
  return licenseResult;
}

// Create a function to generate markdown for README
function generateMarkdown(results) {
  return `
  # ${results.title}\n
  ${renderLicenseBadge(results.license)}\n
  ## Table of Contents:
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributions](#contributions)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)\n
  ## Description:\n ${results.description}\n
  ## Installation:\n ${results.installation}\n
  ## Usage:\n ${results.usage}\n
  ## Contributions:\n ${results.contributing}\n
  ## Tests:\n ${results.tests}\n
  ## License:\n This project is licensed under the terms of the ${results.license} license.\n
  ## Questions:\n Please refer to the following Github profile link: https://github.com/${results.Github}.
    For any additional questions, please e-mail ${results.email}.
`;
}

module.exports = generateMarkdown;
