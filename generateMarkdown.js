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
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Table of Contents 

  * [Description](#description)
    This application is ${data.description}.

  * [Installation](#installation)
  
  In order to install this application, please ${data.installation}.

  ## Usage
  * [Usage](#usage)  
  In order to run this application, please ${data.usage}.

 
  * [Contributing](#contributing)
  
 Was this application made in conjunction with someone else? ${data.contributors} .

  * [Tests](#tests)
 To test this application, ${data.test}.
  
  * [Questions](#questions)

  ## Questions
    
  For further inquiriess feel free to never email me at ${data.email}.
  If you wish to visit my github, please go to ${data.github}.


## Did you know that ${data.fact}

`;
}

module.exports = generateMarkdown;
