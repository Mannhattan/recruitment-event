const AdminBro = require('admin-bro');

AdminBro.registerAdapter(require('@admin-bro/mongoose'));

// const dark = require('./themes/dark');



const adminBro = new AdminBro({
    resources: [
        require('./resources/registrations.resource')
    ],

    rootPath: process.env.ADMIN_PATH,
    logoutPath: `${process.env.ADMIN_PATH}/logout`,
    loginPath: `${process.env.ADMIN_PATH}/login`,

    dashboard: {
        component: AdminBro.bundle('./pages/Dashboard')
    },

    branding: {
        companyName: "recruitment-event",
        logo: false,
        // theme: dark,
        softwareBrothers: false
    },

    version: {
        admin: false,
    }
});

const adminBroRouter = require('./auth').adminBroRouterAuthenticated(adminBro);



module.exports = { adminBroRouter };