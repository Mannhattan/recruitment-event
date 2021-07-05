const config = {
    "testEnvironment": "node",
    "testRegex": "((\\.|/*.)(spec))\\.js?$",
    "globals": {
        "__root": __dirname,
        "__models": __dirname + "/models",
        "__services": __dirname + "/services",
        "__controllers": __dirname + "/controllers",
    }
};

module.exports = config;