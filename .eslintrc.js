module.exports = {
  root: true,

  parserOptions: {
    //parser: 'babel-eslint',
    sourceType: 'module',
    // // solves the "Using the export keyword between a decorator"
    // // See: https://github.com/babel/babel-eslint/issues/662#issuecomment-416573364
    // ecmaFeatures: {
    //   legacyDecorators: true
    // }
  },

  env: {
    browser: true
  },

  extends: [
    //'airbnb-base',
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
  ],

  // required to lint *.vue files
  plugins: [
    'vue'
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

    //'strict': 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
