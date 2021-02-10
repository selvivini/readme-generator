// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const license = data.license
 switch(license){
  case "Apache-2.0":
   return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  case "BSD-3-Clause":
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  case "BSD-2-Clause":
    return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`
  case "gpl-license":
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  case "lgpl-license":
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`
  case "MIT":
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  case "MPL-2.0":
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  case "EPL-2.0":
    return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)` 
   
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
 
  if(license == 'GNU AGPLv3'){
    return "Licence url: "+ baseUrl+ "agpl-3.0/"
  }else if(license == 'GNU GPLv3'){
    return `licencse Url: `
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license? `## Licence: ${data.license}`: ""

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // renderLicenseBadge(data)
  return `# ${data.title}
   ${renderLicenseBadge(data)}
  ## Description
    ${data.description}

## Table Of Contents
   - [Description](#Description)

   - [Installation](#Installation)

   - [Usage](#Usage)

   - [Contribution](#Contribution)

   - [Testing](#Testing)



## Installation
   ${data.Installation}

## Usage
   ${data.usage}

## Contribution
   ${data.Contribution}

## Testing
   ${data.Testing}

## License
   [${data.license}](https://opensource.org/licenses/${data.license})

## Github Profile
   [Github](https://github.com/${data.username})

## Questions
   If you have any questions please reach out to me @
   Email : ${data.email}

  `
      
  ;

}
  

module.exports = {generateMarkDown:generateMarkdown, renderLicenseBadge:renderLicenseBadge};