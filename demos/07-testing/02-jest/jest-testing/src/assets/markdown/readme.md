# Advanced Angular Testing

## Jest

[Jest Testing](https://jestjs.io/)

### Jest Installation

Remove Karma Libs:

```
npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
```

Remove Karma files: `./karma.conf.js` `./src/test.ts`

Install Jest:

Install `@angular-builders/jest` and `jest`:

```
npm i -D jest @types/jest @angular-builders/jest
```

Update your Typescript configurations:

- Replace jasmine in types array of `tsconfig.spec.json` with jest

  > You want your tests to be type-checked against Jest typings and not Jasmine

- Remove `test.ts` from files array
  > This file was responsible for Karma setup, you don’t need it here anymore

```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["jest", "node"]
  },
  "files": ["src/polyfills.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

- Add jest to types array in `tsconfig.json`:

```
{
  "compileOnSave": false,
  "compilerOptions": {
    "types": ["jest"],
    ...
```

Update `angular.json`:

```
  "test": {
          "builder": "@angular-builders/jest:run",
          "options": {
            "no-cache": true,
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "karma.conf.js",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"],
            "scripts": []
          }
        },
```

Run Tests:

```
ng test
```

### Marble Testing

Installation:

```
npm i jasmine-marbles
```

> Note: [rxjs-marbles](https://github.com/cartant/rxjs-marbles) is an alternative to jasmine-marbles

# Cypress E2E Testing

[Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

## Setup

Install packages: `npm i --save-dev cypress chance`

Modify `package.json` and run using `npm run e2e`

```
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "cypress": "cypress open"
  },
```

Examine sample tests in `/cypress/integration/examples`:

## Starting Cypress

Execute: `npm run e2e`

When running for the first time

- cypress is installed,
- a popup is shown
- the cypress folder in the project is created

![cypers](_images/cypress.png)

![cypers](_images/cypress-popup.png)

## Write a Test

[Writing your first test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)

- Start your App using `ng serve`

- Create a new file "vouchers.spec.js" in `/cypress/integration/`

- Add a reference to cypress to the top of the page

```
/// <reference types="Cypress" />
```

- Add the following structure to the file below the import

```
context('Demos', () => {
	beforeEach(() => {
		cy.visit('http://localhost:4200/demos');
	});

  //Add test here later

});
```
