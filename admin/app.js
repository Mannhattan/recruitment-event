// set directories shorthands for components
global.__root = __dirname;

global.__models = __dirname + "/models";

process.env = {
    ...process.env,
    ...require(__root + "/config.json")
};



const express = require("express");
const mongoose = require('mongoose');
const app = express();

const { adminBroRouter } = require(__root + "/admin.js");

const PORT = process.env.PORT;



console.log("========================================================================================");
console.log("Starting server...");



mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: process.env.DB_POOL_SIZE
    }
);

let db = mongoose.connection;

db.on('error', (error) => console.error(error));

db.once('open', () => {
    console.log('Connected to mongoDB!');

    app.use(`${process.env.ADMIN_PATH}`, adminBroRouter);

    app.listen(PORT, () => {
        console.log(`Server started successfully (port: ${PORT})`);
        console.log("========================================================================================");
    });
});



process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose disconnected on app termination');
        process.exit(0);
    });
});