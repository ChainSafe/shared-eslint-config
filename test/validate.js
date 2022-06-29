const eslint = require("eslint");
const eslintrc = require("..")
const assert = require('assert').strict;


describe("validate config", function () {

    it("load config in eslint to validate all rule syntax is correct", async function() {
        var cli = new eslint.ESLint({
            useEslintrc: false,
            baseConfig: eslintrc,
          })
          var result = await cli.lintFiles("./src/index.ts");
          assert.equal(result[0].errorCount, 0)
    })
})