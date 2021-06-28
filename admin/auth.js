const session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const { buildAuthenticatedRouter } = require('@admin-bro/express');



const adminBroRouterAuthenticated = (adminBroInstance) => {
    return buildAuthenticatedRouter(adminBroInstance, {
        authenticate: async (email, password) => {
            if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
                return {
                    "email": "admin",
                    "title": "Administrator"
                };
            } else return false;
        },
        cookiePassword: process.env.COOKIE_SECRET_ADMIN,
    }, null, {
        cookie: {
            maxAge: 2 * 60 * 60 * 1000
        },
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection, collection: "sessions-admin" })
    });
};



module.exports = { adminBroRouterAuthenticated };