// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'None') {
  return 'Sorry No Badge for you!'
} else if (license === 'Apache License 2.0') {
  return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-success)'

} else if (license === 'MIT License') {
  return '![License: MIT License](https://img.shields.io/badge/License-MIT.0-red)'
} else {
  return '![License: MIT License](https://img.shields.io/badge/Mozilla-blue)'
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  }
  if (license === 'Apache License 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/'
  }
  if (license === 'MIT License') {
    return 'https://opensource.org/license/mit/'
  }
  if (license === 'Mozilla Public License') {
    return 'https://opensource.org/license/mpl-2-0/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  ## Title 
  - ${data.title}
  
  ## Description
  - ${data.description}

  ## Table of Content
  1. [Title](#title)
  2. [Description](#description)
  3. [Install](#run)
  4. [Repo](#repo)
  5. [contributors](#contributors)
  6. [Badge](#badge)
  7. [License](#license)

  ## Install
  - ${data.run}

  ## Repo
  - github.com/${data.repo}/README_Generator

  ## contributors
  - ${data.contributors}

  ## Badge
  - ${renderLicenseBadge(data.license)}

  ## License
  - ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
