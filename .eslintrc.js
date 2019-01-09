
module.exports = exports = {
    "root": true,
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true,
    "jest": true,
    "jasmine": true,
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "max-len": [
      "error",
      200
    ],
    "no-empty-function": ["error"],
    "max-nested-callbacks": [
      "error",
      4
    ],
    "no-extra-semi": 0,
    "max-params": ["error", 4],
    "no-labels": ["error"],
    "no-fallthrough": 0,
    "max-depth": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-shadow": 0,
    "operator-linebreak": ["error", "after"],
    "object-property-newline": 0,
    "no-negated-condition": ["error"],
    "no-multiple-empty-lines": 0,
    "no-unused-vars": 0,
    "no-constant-condition": 0
  }
};