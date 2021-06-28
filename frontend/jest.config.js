const config = {
    verbose: true,
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "^@root(.*)$": "<rootDir>$1",
        "^@components(.*)$": "<rootDir>/components$1",
        "^@assets(.*)$": "<rootDir>/assets$1",
        "^@pages(.*)$": "<rootDir>/pages$1",
    }
};

module.exports = config;