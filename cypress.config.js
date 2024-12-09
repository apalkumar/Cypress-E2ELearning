const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin');
    },
  },

  env:{
    baseURL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    SearchPageUrl: "https://naveenautomationlabs.com/opencart/index.php?route=product/search"
  }
});
