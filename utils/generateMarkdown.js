const year = new Date().getFullYear()

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license?.spdx_id ? `https://img.shields.io/badge/license-${license.spdx_id}-green` : ""
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
    return `
## License\n
Copyright (c) ${year} ${name} ${email ? email : ""} Licensed under the [${license.spdx_id}](${renderLicenseLink(license)}) license.
`
  } else return ""
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  // prettier-ignore
  let { ghUser, ghRepo, title, name, email, description, installation, usage, license, contribute, tests, credits } = data
  return `${license?.spdx_id ? `![GitHub](https://img.shields.io/github/license/${ghUser}/${ghRepo}?label=license)` : ""}
  # ${title}
  ${description?.length > 0 ? `## Description<br/>${description}<br/>` : ``}
  ${installation?.length > 0 ? `## Installation<br/>${installation}<br/>` : ``}
  ${usage?.length > 0 ? `## Usage<br/>${usage}<br/>` : ``}
  ${credits?.length > 0 ? `## Credits<br/>${credits}<br/>` : ``}
  ${tests?.length > 0 ? `## Tests<br/>${tests}<br/>` : ``}
  ${renderLicenseSection(data)}
  ${credits?.length > 0 ? `## Credits<br/>${credits}<br/>` : ``}
  `;
}


module.exports = generateMarkdown;
