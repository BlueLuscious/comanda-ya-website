module.exports = function (eleventyConfig) {
    
    // Custom Button
    eleventyConfig.addShortcode("customButton", function({
        id, type="button", label="", icon="", extraClasses="", labelClasses="", iconClasses=""
    }) {
        return `
            <button type="${type}" id="${id}" class="px-3 py-2 transition-all duration-300 ease-in-out ${extraClasses}">
                ${icon ? `<i class="bi ${icon} ${iconClasses}"></i>` : ""}
                ${label ? `<span class="w-full ${labelClasses}">${label}</span>` : ""}
            </button>
        `;
    });

};
