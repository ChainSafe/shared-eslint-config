module.exports = {
    env: {
        node: true,
        es6: true,
        browser: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json'
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "airbnb-base",
    ],
    plugins: [
        "@typescript-eslint",
        "prettier",
        "import",
        "simple-import-sort",
        "eslint-comments"
    ],
    rules: {
        "func-names": [
            "error",
            "as-needed",
            {
                "generators": "as-needed"
            }
        ],
        "max-len": [
            "error",
            {
                "code": 120,
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-trailing-spaces": [
            "warn",
            {
                "skipBlankLines": true
            }
        ],
        "no-void": ["error", { "allowAsStatement": true }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            "varsIgnorePattern": "^_",
            "ignoreRestSiblings": true
        }],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            },
            {
                "blankLine": "always",
                "prev": [
                    "multiline-const",
                    "multiline-let",
                    "multiline-var",
                    "multiline-expression",
                    "multiline-block-like"
                ],
                "next": "*"
            },
            {
                "blankLine": "always",
                "prev": ["const", "let", "var", "expression", "multiline-block-like"],
                "next": ["export"]
            },
            {
                "blankLine": "always",
                "prev": "directive",
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": "directive",
                "next": "directive"
            },
            {
                "blankLine": "always",
                "prev": "block-like",
                "next": "*"
            },
            {
                "blankLine": "always",
                "prev": "expression",
                "next": "*"
            },
            {
                "blankLine": "always",
                "prev": ["case", "default"],
                "next": "*"
            }
        ],
        "prefer-destructuring": [
            "error",
            {
                "object": true,
                "array": false
            }
        ],
        "prefer-const": ["error"],
        "prefer-rest-params": ["error"],
        "prefer-spread": ["off"],
        "prettier/prettier": [
            "warn",
            {
                "semi": true,
                "trailingComma": "all",
                "singleQuote": true,
                "printWidth": 90,
                "tabWidth": 2,
                "endOfLine": "auto",
                "bracketSpacing": true
            }
        ],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": {
                    //detects false positives
                    properties: false
                }
            }
        ],
        "@typescript-eslint/explicit-function-return-type": ["error", {
            "allowExpressions": true
        }],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-require-imports": "error",
        "import/no-cycle": "error",
        "import/no-useless-path-segments": "error",
        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": true
        }],
        "import/first": "error",
        "import/no-duplicates": "error",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "eslint-comments/no-unlimited-disable": "error",
        "eslint-comments/no-unused-disable": "error",
        "simple-import-sort/imports": [
            "error",
            {
                "groups": [
                    ["^react", "^@?\\w"],
                    ["^(@|components)(/.*|$)"],
                    ["^\\u0000"],
                    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                    ["^.+\\.?(css|scss)$"]
                ]
            }
        ],
        "simple-import-sort/exports": "error",
    }
};
