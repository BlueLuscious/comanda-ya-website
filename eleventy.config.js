

module.exports = async function (eleventyConfig) {
    
    const { I18nPlugin } = await import("@11ty/eleventy");

    // TAGS (Shortcodes & Filters)
    require("./src/tags/index.js")(eleventyConfig);

    // Remove `.html` from URL
    eleventyConfig.addUrlTransform((page) => {
		if (page.url.endsWith(".html")) {
			return page.url.slice(0, -1 * ".html".length);
		}
	});
    
    // PLUGINS
	eleventyConfig.addPlugin(I18nPlugin, {
        defaultLanguage: "es",
        errorMode: "warn"
    });
    
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    return {
        dir: {
            input: "src",
            includes: "templates",
            layouts: "templates",
            output: "_site"
        },
        templateFormats: ["html", "njk"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
}
