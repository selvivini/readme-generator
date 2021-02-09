// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license? ['## Licence'](`https://img.shields.io/badge/licence-${data.license}-<COLOR>`): ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const baseUrl = "https://choosealicense.com/licenses/"
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
  return `# ${data.title}
  ## Description
    ${data.description}

## Table Of Contents
   -[Description](#Description)
   -[Installation](#Installation)
   -[Usage](#Usage)
  `
          
  ;

}

module.exports = generateMarkdown;