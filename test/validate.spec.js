const eslint = require("eslint");
const eslintrc = require("..")
const eslintrcMocha = require("../ts-mocha-chai");
const eslintrcFrontend = require("../frontend-vanilla");
const { assertHasEslintError } = require("./helper");
const assert = require('assert').strict;

const isWindows = process.platform === "win32";


describe("validate config", function () {

    describe("base", function () {
        it("load config in eslint to validate all rule syntax is correct", async function() {
            const cli = new eslint.ESLint({
                useEslintrc: false,
                baseConfig: eslintrc,
            });

            const result = await cli.lintFiles("./src/index.ts");

            assertHasEslintError(result, "@typescript-eslint/consistent-type-imports")
            assertHasEslintError(result, "eslint-comments/no-unlimited-disable")
            assertHasEslintError(result, "eslint-comments/no-unused-disable")
        })
    })

    describe("mocha_chai", function() {
        it("load config in mocha eslint to validate base ruleset is valid", async function() {
            const cli = new eslint.ESLint({
              useEslintrc: false,
              baseConfig: eslintrcMocha,
            });

            const result = await cli.lintFiles("./src/index.spec.ts");

            if(result[0].errorCount > 0) {
              console.error(result[0].messages);
            }

            assert.equal(result[0].errorCount, 0);
        })

        it("load config in mocha eslint to validate all rule syntax is correct", async function() {
            const cli = new eslint.ESLint({
                useEslintrc: false,
                baseConfig: eslintrcMocha,
            });

            const result = await cli.lintFiles("./src/index.spec.ts");

            if(result[0].errorCount > 0) {
                console.error(result[0].messages);
            }

            assert.equal(result[0].errorCount, 0);
        })

        it("load config in mocha eslint to check if errors are detected", async function() {
            const cli = new eslint.ESLint({
                useEslintrc: false,
                baseConfig: eslintrcMocha,
            });

            const result = await cli.lintFiles("./src/index_error.spec.ts");

            assertHasEslintError(result, "@fintechstudios/chai-as-promised/no-unhandled-promises");

            assertHasEslintError(result, "chai-expect/terminating-properties");

            assertHasEslintError(result, "mocha/no-mocha-arrows");
            assertHasEslintError(result, "mocha/no-top-level-hooks");
        })
    })

    describe("frontend vanilla", function () {
        it("load config in eslint to validate all rule syntax is correct", async function() {
            const cli = new eslint.ESLint({
                useEslintrc: false,
                baseConfig: eslintrcFrontend,
            });

            const result = await cli.lintFiles("./src/index.ts");

            assertHasEslintError(result, "@typescript-eslint/consistent-type-imports");
            assertHasEslintError(result, "@typescript-eslint/no-unused-vars");

            assertHasEslintError(result, "eslint-comments/no-unlimited-disable");
            assertHasEslintError(result, "eslint-comments/no-unused-disable");

            assertHasEslintError(result, "prettier/prettier");

            assertHasEslintError(result, "import/no-unresolved");

            assertHasEslintError(result, "simple-import-sort/imports");

            assertHasEslintError(result, "no-console");
            assertHasEslintError(result, "no-multiple-empty-lines");
            assertHasEslintError(result, "semi");
            assertHasEslintError(result, "spaced-comment");
            assertHasEslintError(result, "quotes");
            assertHasEslintError(result, "padding-line-between-statements");
            assertHasEslintError(result, "prefer-const");

            if (isWindows) {
                assertHasEslintError(result, "linebreak-style");
            }
        })
    })
})
