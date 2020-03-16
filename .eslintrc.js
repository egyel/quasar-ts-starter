module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true
  },



  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',
    //'plugin:@typescript-eslint/eslint-recommended', // note: it is included in "@vue/typescript[/recommended]"
    //'plugin:@typescript-eslint/recommended', // note: it is included in "@vue/typescript/recommended"

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // TypeScript parser options, uncomment one out of two
    // See https://github.com/vuejs/eslint-config-typescript
    // 'eslint:recommended', '@vue/typescript'  // Base configuration for Vue-TypeScript projects
    //'@vue/airbnb', // TODO: try use it, maybe use iamturns/eslint-config-airbnb-typescript instead of @vue/eslint-config-airbnb
    '@vue/typescript/recommended' // Opinionated ruleset

    // Additional type checking
    // See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    //'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],

  parserOptions: {
    // parser: '@typescript-eslint/parser', // note: it is included in "@vue/typescript[/recommended]"
    sourceType: 'module'
    // // solves the "Using the export keyword between a decorator"
    // // See: https://github.com/babel/babel-eslint/issues/662#issuecomment-416573364
    // ecmaFeatures: {
    //   legacyDecorators: true
    // }
  },

  // required to lint *.vue files
  plugins: [
    'vue',
    '@typescript-eslint'
  ],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true,
    'Capacitor': true,
    'chrome': true
  },

  // add your custom rules here
  rules: {
    // 'no-param-reassign': 'off',
'no-empty': 'error',
    // 'import/first': 'off',
    // 'import/named': 'error',
    // 'import/namespace': 'error',
    // 'import/default': 'error',
    // 'import/export': 'error',
    // 'import/extensions': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/prefer-default-export': 'off',
    // 'prefer-promise-reject-errors': 'off',

    //'@typescript-eslint/no-non-null-assertion': 'error',

    // 'space-before-function-paren': [2, 'never'],
    // 'vue/array-bracket-spacing': 'error',
    // 'vue/arrow-spacing': 'error',
    // 'vue/block-spacing': 'error',
    // 'vue/brace-style': 'error',
    // 'vue/camelcase': 'error',
    // 'vue/comma-dangle': 'error',
    // 'vue/component-name-in-template-casing': 'error',
    // 'vue/eqeqeq': 'error',
    // 'vue/key-spacing': 'error',
    // 'vue/match-component-file-name': 'error',
    // 'vue/object-curly-spacing': 'error',

    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
