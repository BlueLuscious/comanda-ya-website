module.exports = function (eleventyConfig) {
    
    // Custom Language Selector
    eleventyConfig.addShortcode("langSelector", function({id, buttonIcon="bi-chevron-down", buttonClasses="", iconClasses="", dropdownClasses=""}) {
        const currentLang = this.page?.lang || "es";
        const localeLinks = eleventyConfig.getFilter("locale_links")(this.page?.url);
        const i18n = eleventyConfig.getFilter("i18n");

        return `
        <div id="${id}" class="relative inline-block w-full">
            <button id="${id}_button" class="flex items-center justify-between gap-x-2 w-full p-2 text-left 
                border rounded-md shadow-sm transition-all duration-200 ease-in-out cursor-pointer ${buttonClasses}"
            >
                <span class="flex items-center gap-x-2">
                    <img src="/assets/images/langs/flags/${currentLang}.png" class="size-4 rounded-full">
                    ${currentLang.toUpperCase()}
                </span>
                <i class="bi ${buttonIcon} text-md transform transition-all duration-200 ease-in-out ${iconClasses}"></i>
            </button>

            <div id="${id}_dropdown" class="absolute z-10 my-1 w-full border rounded-md shadow-lg transform 
                transition-all duration-200 ease-in-out scale-95 opacity-0 overflow-hidden pointer-events-none ${dropdownClasses}"
            >
                <ul>
                    ${localeLinks.map(link => `
                    <li>
                        <a href="${link.url}" lang="${link.lang}" hreflang="${link.lang}"
                            class="flex items-center gap-x-2 w-full p-2 text-sm text-left hover:bg-secondary-qt_grey/15
                            dark:hover:bg-secondary-qt_grey/40"
                        >
                            <img src="/assets/images/langs/flags/${link.lang}.png" class="size-4 rounded-full">
                            ${(i18n("languages", {}, currentLang)?.[link.lang]?.name ?? link.lang)}
                        </a>
                    </li>
                    `).join("")}
                </ul>
            </div>
        </div>
        `;
    });

};
