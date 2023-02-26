const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ai7zra",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
