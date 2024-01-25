const eslint = require("eslint");
const eslintrcFrontend = require("../frontend-vanilla");
const { assertHasEslintError } = require("./helper");

const isWindows = process.platform === "win32";

describe("validate frontend config", function () {
    describe("vanilla", function () {
        it("load config in eslint to validate all rule syntax is correct", async function() {
            const cli = new eslint.ESLint({
                useEslintrc: false,
                baseConfig: eslintrcFrontend,
            });

            const result = await cli.lintFiles("./src/frontend.ts");

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
});
