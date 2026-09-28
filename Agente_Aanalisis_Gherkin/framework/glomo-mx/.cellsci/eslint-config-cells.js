module.exports = {
  env: {
    "browser": true,
    "mocha": true
  },
  globals: {
    "assert": false,
    "BbvaPagejsRouting": false,
    "Cells": false,
    "CellsApp": false,
    "CellsBehaviors": false,
    "expect": false,
    "flush": false,
    "I18nMsg": false,
    "module": false,
    "page": false,
    "Platform": false,
    "Polymer": false,
    "Promise": false,
    "require": false,
    "setup": false,
    "suite": false,
    "suiteSetup": false,
    "suiteTeardown": false,
    "test": false,
    "teardown": false,
    "unwrap": false,
    "WCT": false,
    "wrap": false
  },
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  plugins: [
    "html"
  ],
  rules: {
    "semi": [
      "error",
      "always"
    ],
    "no-bitwise": "error",
    "no-cond-assign": "off",
    "no-console": "off",
    "curly": [
      "error",
      "all"
    ],
    "no-debugger": "off",
    "eqeqeq": "error",
    "no-eq-null": "error",
    "no-eval": "off",
    "no-unused-expressions": "error",
    "guard-for-in": "error",
    "no-extend-native": "error",
    "block-scoped-var": "off",
    "strict": "off",
    "no-iterator": "off",
    "no-use-before-define": "error",
    "no-loop-func": "error",
    "complexity": [
      "error",
      11
    ],
    "max-depth": [
      "error",
      5
    ],
    "max-params": [
      "error",
      10
    ],
    "max-statements": [
      "error",
      40
    ],
    "no-caller": "error",
    "no-irregular-whitespace": "error",
    "no-new": "error",
    "valid-typeof": "off",
    "require-yield": "off",
    "no-plusplus": "off",
    "no-proto": "off",
    "no-script-url": "off",
    "no-shadow": ["error", { "builtinGlobals": true, "hoist": "functions", "allow": [] }],
    "no-new-func": "off",
    "no-new-wrappers": "off",
    "no-undef": "error",
    "no-unused-vars": "off",
    "no-invalid-this": "off",
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "no-empty": "error",
    "no-spaced-func": "error",
    "array-bracket-spacing": [
      "error",
      "never",
      {
        "singleValue": true
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "space-unary-ops": [
      "error",
      {
        "words": false,
        "nonwords": false
      }
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-trailing-spaces": "error",
    "yoda": [
      "error",
      "never"
    ],
    "no-with": "error",
    "brace-style": "error",
    "no-multiple-empty-lines": "error",
    "no-multi-str": "error",
    "one-var": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "wrap-iife": "error",
    "comma-style": [
      "error",
      "last"
    ],
    "space-infix-ops": "error",
    "camelcase": [
      "error",
      {
        "properties": "never"
      }
    ],
    "new-cap": [
      "error",
      {
        "capIsNewExceptions": [
          "BbvaPagejsRouting",
          "Cells",
          "CellsApp",
          "I18nMsg",
          "Platform",
          "Polymer",
          "Promise",
          "WCT"
        ]
      }
    ],
    "dot-notation": "error",
    "keyword-spacing": [
      "error",
      {
        "overrides": {
          "if": {
            "after": true
          },
          "else": {
            "after": true
          },
          "for": {
            "after": true
          },
          "while": {
            "after": true
          },
          "do": {
            "after": true
          },
          "switch": {
            "after": true
          },
          "case": {
            "after": true
          },
          "return": {
            "after": true
          },
          "try": {
            "after": true
          },
          "catch": {
            "after": true
          },
          "typeof": {
            "after": true
          }
        }
      }
    ],
    "lines-around-comment": [
      "error",
      {
        "beforeBlockComment": false,
        "beforeLineComment": true,
        "allowBlockStart": true
      }
    ],
    "consistent-this": [
      "error",
      "_this"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ]
  },
}
