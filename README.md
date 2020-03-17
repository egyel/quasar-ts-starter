# Quasar Framework starter with TypeScript

A Quasar Framework using TypeScript.

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Support TypeScript](https://quasar.dev/quasar-cli/cli-documentation/supporting-ts)
See [Configure VS Code](https://quasar.dev/start/vs-code-configuration)
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Used generation params:
? Project name (internal usage for dev) quasar-ts-starter
? Project product name (must start with letter if building mobile apps) Quasar App
? Project description A Quasar Framework app
? Author Egyel
? Pick your favorite CSS preprocessor: (can be changed later) Stylus
? Pick a Quasar components & directives import strategy: (can be changed later) Auto import
? Check the features needed for your project: ESLint, Vuex, Axios, Vue-i18n, IE11 support
? Pick an ESLint preset: Airbnb
? Cordova/Capacitor id (disregard if not building mobile apps) org.cordova.quasar.app
? Should we run `npm install` for you after the project has been created? (recommended) yarn

### TODO
- preventing ESLint and formatting errors from being committed: [lint-staged](https://github.com/okonet/lint-staged) + [husky](https://github.com/typicode/husky)

### Misc
- [Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
