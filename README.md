# @chainsafe/eslint-config

![Node.js CI][node.js ci]
[![package][version.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]

This package provides ChainSafe's .eslintrc as an extensible shared config.

## Usage

The provided configuration contains shared ESLint rules for typescript projects across ChainSafe. To use this configuration you'll need `.eslintrc.js` file in your project root with the following content:

```js
module.exports = {
  extends: "@chainsafe",
}

```

### Monorepo

To make eslint work in monorepo's, make sure tsconfig files are relative to the eslint file.
Base eslint file in the root directory should have `root: true` option set.
For example in the package, you would have something like:

```js
const path = require("path")

module.exports = {
    extends: "../../.eslintrc.js",
    parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
        tsconfigRootDir: path.join(__dirname)
    },
}
```

### With Mocha and Chai

```js

module.exports = {
  extends: "@chainsafe/eslint-config/ts-mocha-chai",
}

```