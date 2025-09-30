const translations = require("../../_data/i18n.js");


module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter("i18n", function(key, vars = {}, language = "") {
        const lang = language.trim() !== "" ? language : this.page?.lang || "es";
        const translation = translations?.[lang]?.[key] ?? `[${key}]`;
        
        if (typeof translation !== "string") { return translation; }

        return translation.replace(/{{\s*(\w+)\s*}}/g, (match, varName) => {
            return vars[varName] ?? `[${varName}]`;
        });
    });

};
