const baseConfig = require("./index")

module.exports = {
    ...baseConfig,
    env: {
        ...baseConfig.env,
        mocha: true,
    },
    plugins: [
        ...baseConfig.plugins,
        "mocha",
        "chai-expect",
        "@fintechstudios/eslint-plugin-chai-as-promised"
    ],
    extends: [
        ...baseConfig.extends,
        "plugin:mocha/recommended"
    ],
    rules: {
        ...baseConfig.rules,
        "mocha/handle-done-callback": "off", //doesn't work when you define `this` type as first argument
        "mocha/no-exclusive-tests": "error",
        "mocha/no-top-level-hooks": "error",
        "mocha/no-skipped-tests": "error",
        "mocha/no-pending-tests": "error",
        'chai-expect/missing-assertion': 'error',
        'chai-expect/terminating-properties': 'error',
        "@fintechstudios/chai-as-promised/no-unhandled-promises": "error",
        "@fintechstudios/chai-as-promised/no-await-in-condition": "error"
    },
    "overrides": [
        {
            "files": ["*.spec.js", "*.spec.ts"],
            "rules": {
                "prefer-arrow-callback": "off",
                "func-names": "off",
            }
        }
    ],
}
