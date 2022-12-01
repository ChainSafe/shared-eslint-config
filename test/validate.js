const eslint = require("eslint");
const eslintrc = require("..")
const eslintrcMocha = require("../ts-mocha-chai")
const assert = require('assert').strict;


describe("validate config", function () {

    describe("base", function () {
      it("load config in eslint to validate all rule syntax is correct", async function() {
        var cli = new eslint.ESLint({
            useEslintrc: false,
            baseConfig: eslintrc,
          })
          var result = await cli.lintFiles("./src/index.ts");
          if(result[0].errorCount > 0) {
            console.error(result[0].messages)
          }
          assert.equal(result[0].errorCount, 0)
      })
    })

    describe("mocha_chai", function() {
      it("load config in mocha eslint to validate base ruleset is valid", async function() {
        var cli = new eslint.ESLint({
            useEslintrc: false,
            baseConfig: eslintrcMocha,
          })
          var result = await cli.lintFiles("./src/index.ts");
          if(result[0].errorCount > 0) {
            console.error(result[0].messages)
          }
          assert.equal(result[0].errorCount, 0)
      })
          
      it("load config in mocha eslint to validate all rule syntax is correct", async function() {
        var cli = new eslint.ESLint({
            useEslintrc: false,
            baseConfig: eslintrcMocha,
          })
          var result = await cli.lintFiles("./src/index.spec.ts");
          if(result[0].errorCount > 0) {
            console.error(result[0].messages)
          }
          assert.equal(result[0].errorCount, 0)
      })

      it("load config in mocha eslint to check if errors are detected", async function() {
        var cli = new eslint.ESLint({
            useEslintrc: false,
            baseConfig: eslintrcMocha,
          })
          var result = await cli.lintFiles("./src/index_error.spec.ts");
          assert.equal(result[0].errorCount, 5)
      })
    })

})