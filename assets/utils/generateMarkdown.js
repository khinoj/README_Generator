// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'None') {
  return 'Sorry No Badge for you!'
} else if (license === 'Apache License 2.0') {
  return 'https://img.shields.io/github/license/saltstack/salt'
} else if (license === 'MIT License') {
  return '![MIT License](-https://img.shields.io/badge/MIT-License-blue.svg)'
} else {
  return '-https://img.shields.io/badge/`{data.license}`-blue'
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
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  - ${data.description}

  ## Install
  - ${data.run}

  ## Github Repo
  - ${data.repo}

  ## Github Pages
  - ${data.page}

  ## Badge
  - ${renderLicenseBadge(data.license)}

  ## License
  - ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;

// https://img.shields.io/badge/license-MIT-blue  mit 

// https://img.shields.io/github/license/saltstack/salt   a

//https://img.shields.io/badge/MIT_License-blue  m