// set directories shorthands for components
global.__root = __dirname;
global.__models = __dirname + "/models";
global.__services = __dirname + "/services";
global.__controllers = __dirname + "/controllers";

process.env = {
    ...process.env,
    ...require('./config.json')
}



const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT;



console.log("========================================================================================");
console.log("Starting server...");


app.use(bodyParser.json());


app.use((req, res, next) => {
    res.removeHeader("X-Powered-By");
    next();
});



app.use('/api', require('./api'));


mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: process.env.DB_POOL_SIZE
});

let db = mongoose.connection;

db.on('error', (error) => console.error(error));

db.once('open', () => {
    console.log('Connected to mongoDB!');

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