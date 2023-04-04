const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080, // resolução da tela
    viewportWidth: 1920,
    baseUrl:'http://www.blazedemo.com', // endereço do software alvo


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
