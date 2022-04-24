// Get the current year for the license text
const year = new Date().getFullYear()

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license?.spdx_id ? `![github](https://img.shields.io/badge/license-${license.spdx_id}-green)` : ""
  // username && repo ? `https://img.shields.io/github/license/${username}/${repo}?label=license` : ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license?.url ? license.url : ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function renderLicenseSection(data) {
  let { name, license, email } = data
  console.log(data)
  if (license) {
    return `## License\n
Copyright (c) ${year} ${name} ${email ? email : ""} Licensed under the [${license.spdx_id}](${renderLicenseLink(license)}) license.
`
  } else return ""
}

// TODO: Create a function to generate markdown for README
// if a section is empty, dont render it
const generateMarkdown = (data) => {
  // prettier-ignore
  let { title, version, description, installation, usage, license, contribute, tests, credits } = data
  return `# ${title}
  ${renderLicenseBadge(license)} ${version?.length > 0 ? `![version](https://img.shields.io/badge/version-${version}-orange)\n` : ``}
  ## Table of Contents
  >${generateTOC(data)}  
  ${description?.length > 0 ? `## Description\n${description}\n\n` : ``}
  ${installation?.length > 0 ? `## Installation\n${installation}\n\n` : ``}
  ${usage?.length > 0 ? `## Usage\n${usage}\n\n` : ``}
  ${contribute?.length > 0 ? `## Contribute\n${contribute}\n\n` : ``}
  ${tests?.length > 0 ? `## Tests\n${tests}\n\n` : ``}
  ${renderLicenseSection(data)}
  ${credits?.length > 0 ? `## Credits\n${credits}\n\n` : ``}
  `;
}

// generate the table of contents.  if a section is empty, dont render it
function generateTOC(data) {
  let { description, installation, usage, license, contribute, tests, credits } = data
  return `
  ${description?.length > 0 ? `[Description](#description)\n` : ``}
  ${installation?.length > 0 ? `[Installation Instructions](#installation)\n` : ``}
  ${usage?.length > 0 ? `[Usage Info](#usage)\n` : ``}
  ${contribute?.length > 0 ? `[Contribute](#contribute)\n` : ``}
  ${tests?.length > 0 ? `[Tests](#tests)\n` : ``}
  ${license?.spdx_id ? `[License](#license)\n` : ``}
  ${credits?.length > 0 ? `[Credits](#credits)\n` : ``}
  \n\n`
}


module.exports = generateMarkdown;
