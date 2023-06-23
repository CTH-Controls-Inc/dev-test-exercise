const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2trqeu',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
