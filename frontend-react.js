const baseFrontendConfig = require("./frontend-vanilla")

module.exports = {
    ...baseFrontendConfig,
    extends: [
        ...baseFrontendConfig.extends.filter((item) => item !== "airbnb-base"),
        "airbnb"
    ],
    plugins: [...baseFrontendConfig.plugins, "react", "react-hooks"],
    rules: {
        ...baseFrontendConfig.rules,
        // this rule is turned off, but turned on for .js and .ts files (in overrides section), so it doesn't force return types of components :)
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/jsx-props-no-spreading": "off",
        "react/state-in-constructor": "off",
        "react/prop-types": [
            "error",
            {
                "ignore": [
                    "children",
                    "style",
                    "forwardRef",
                    "ref",
                    "classes",
                    "className",
                    "theme"
                ]
            }
        ],
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "react/jsx-no-comment-textnodes": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-indent": ["off", 4],
        "react/jsx-indent-props": ["off", 4],
        "react/jsx-closing-bracket-location": [
            "warn",
            {
                "selfClosing": "line-aligned",
                "nonEmpty": "tag-aligned"
            }
        ],
        "react/jsx-one-expression-per-line": "off",
        "react/function-component-definition": [
            "error",
            {
                "namedComponents": "function-declaration",
                "unnamedComponents": "arrow-function"
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "off",
        "jsx-a11y/click-events-have-key-events": "off"
    },
    overrides: [
        {
            "files": ["*.js", "*.mjs", "*.cjs", "*.ts", "*.mts", "*.cts"],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": "error"
            }
        }
    ]
}
