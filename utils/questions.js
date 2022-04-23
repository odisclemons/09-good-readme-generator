const licenses = require("./licenses")

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Full Name (e.g.: John Doe)",
    },
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: "Email",
    // },

    {
        type: 'input',
        name: 'title',
        message: "Project Title",
    },
    // {
    //     type: 'editor',
    //     name: 'description',
    //     message: "Description",
    // },
    // {
    //     type: 'editor',
    //     name: 'instructions',
    //     message: "Instructions",
    // },
    // {
    //     type: 'editor',
    //     name: 'credits',
    //     message: "Credits",
    // },
    {
        type: 'list',
        name: 'license',
        message: "License",
        choices: licenses.map(license => { return { name: license.spdx_id, value: license } })
    },
    // {
    //     type: 'editor',
    //     name: 'contribute',
    //     message: "How to contribute",
    // },


]
module.exports = questions