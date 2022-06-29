# @chainsafe/eslint-config

![Node.js CI][node.js ci]
[![package][version.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]

This package provides ChainSafe's .eslintrc as an extensible shared config.

## Usage
Provided configuration contains shared ESLint rules for typescript projects across ChainSafe. To use this configuration you'll need `.eslintrc.js` file in your project root with the following content:

```js
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: "@chainsafe",
}

```

You'll need to add this package and eslint-patch to your (dev) dependencies and satisfy "typescript" optional peer dependency yourself.
`yarn add --dev @chainsafe/eslint-config @rushstack/eslint-patch typescript`

> Note:`@rushstack/eslint-patch` is eslint patch provided by mycrosoft for some of most long standing issues in eslint (https://github.com/eslint/eslint/issues/3458). Tldr eslint doesn't resolve dependencies relative to shared config which means every user of shared config would have to install all required plugins in their project.