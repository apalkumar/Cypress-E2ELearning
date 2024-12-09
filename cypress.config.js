const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env:{
    baseURL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    SearchPageUrl: "https://naveenautomationlabs.com/opencart/index.php?route=product/search"
  }
});
