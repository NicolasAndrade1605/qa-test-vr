const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e:  {
        baseUrl: "https://loja.vr.com.br/",
        setupNodeEvents(on, config) {}
    }
});