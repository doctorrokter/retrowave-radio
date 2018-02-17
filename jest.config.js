module.exports = {
    "bail": true,
    "browser": true,
    "notify": true,
    "verbose": true,
    "coveragePathIgnorePatterns": [
        "/node_modules/",
        "__tests__"
    ],
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
    "transform": {
        "^.+\\.js?$": "babel-jest",
        "^.+\\.(css|scss|less)$": "jest-css-modules"
    },
    "collectCoverage": true,
    "testRegex": "(/__tests__/.*|\\.(Spec))\\.(js)$",
    "moduleFileExtensions": [
        "js",
        "jsx"
    ]
};