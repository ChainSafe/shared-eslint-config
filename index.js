module.exports = {

    env: {
        mocha: true,
        node: true,
        es6: true
    },
    rules: {
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      project: './tsconfig.json'
    },
    plugins: [
        "@typescript-eslint",
        "prettier",
        "import"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended"
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
              'endOfLine': 'auto',
            }
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
              "checksVoidReturn": {
                //detects false positives
                properties: false
              }
            }
        ],
        "@typescript-eslint/no-unused-vars": ["error", {
            "varsIgnorePattern": "^_",
            "ignoreRestSiblings": true
        }],
        "@typescript-eslint/explicit-function-return-type": ["error", {
            "allowExpressions": true
        }],
        "@typescript-eslint/no-require-imports": "error",
        "import/order": [
            "error",
            {
              "groups": ["builtin", "external", "parent", "internal", "sibling"],
              "newlines-between": "always",
              "alphabetize": {
                order: 'asc'
              }
            },
        ],
        "import/no-cycle": "error",
        "import/no-useless-path-segments": "error",
        "import/no-extraneous-dependencies": "error",
        "import/first": "error",
        "import/no-duplicates": "error",
        "import/order": "error",
        "import/newline-after-import": "error",

    }
};
