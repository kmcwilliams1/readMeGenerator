// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
   return "";
 } else {
   return `![license](https://img.shields.io/badge/license-${license}-green.png)`;
 }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none'){
    return "";
  } else {
    return `* [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none'){
    return "";
  } else {
    return `## License
    
    This project is licensed under ${license} license.
  
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents 

  * [Installation](#installation)
  
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  ## Questions
    
  This project is licensed under ${data.questions} license.

  ${renderLicenseSection(data.license)}

  ## Usage
    
  This project is licensed under ${data.usage} license.

`;
}

module.exports = generateMarkdown;
