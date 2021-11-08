module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
      },

      plugins: [
        "@typescript-eslint"
      ],
      // You can add Typescript specific rules here.
      // If you are adding the typescript variant of a rule which is there in the javascript
      // ruleset, disable the JS one.
      rules: {
        "@typescript-eslint/no-array-constructor": "warn",
        "no-array-constructor": "off"
      }
    }
  ],
  extends: [
    // 'airbnb-base',
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react"
  ],
  parser: "babel-eslint", // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  plugins: [
    "import"
  ],
  root: true, // For configuration cascading.
  rules: {
    indent: [
      "warn",
      2
    ],
    // "no-unused-vars": [
    //   "error", {
    //     "vars": "all",
    //     "args": "after-used",
    //     "ignoreRestSiblings": false
    //   }
    // ]
    "no-unused-vars": "off", // не использованна переменная в typescript
    "@typescript-eslint/no-unused-vars": ["warn", {
      // "vars": "all",
      // "args": "after-used",
      // "ignoreRestSiblings": false
    }]
  },
  settings: {
    react: {
      version: "detect" // Detect react version
    }
  }
};