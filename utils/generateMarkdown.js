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
function renderLicenseSection(data) {
  if (license) {
    let { fullName, license, email } = data
    return `
    ## License\n
    Copyright (c) ${year} ${fullName} ${email ? email : ""} Licensed under the [${license.spdx_id}](${renderLicenseLink(license)}) license.`
  } else return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
