const licenses = require("./licenses")

const questions = [
    {
        type: 'input',
        name: 'ghUser',
        message: "Github Username",
    },
    {
        type: 'input',
        name: 'ghRepo',
        message: "Github Repo Name",
    },
    {
        type: 'input',
        name: 'title',
        message: "Project Title",
    },
    {
        type: 'input',
        name: 'version',
        message: "Version (e.g.: 1.0.0)",
    },
    {
        type: 'input',
        name: 'name',
        message: "Full Name (e.g.: John Doe)",
    },
    {
        type: 'input',
        name: 'email',
        message: "Email",
    },
    {
        type: 'editor',
        name: 'description',
        message: "Description",
    },
    {
        type: 'editor',
        name: 'installation',
        message: "Installation Instructions",
    },
    {
        type: 'editor',
        name: 'usage',
        message: "Usage Information",
    },
    {
        type: 'list',
        name: 'license',
        message: "License",
        choices: licenses.map(license => { return { name: license.spdx_id, value: license } })
    },
    {
        type: 'editor',
        name: 'contribute',
        message: "How to contribute",
    },
    {
        type: 'editor',
        name: 'tests',
        message: "Test Instructions",
    },
    {
        type: 'editor',
        name: 'credits',
        message: "Credits",
    },
    {
        type: 'editor',
        name: 'userQuestions',
        message: "How should users contact you with questions?",
    },


]
module.exports = questions