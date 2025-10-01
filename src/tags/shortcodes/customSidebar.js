module.exports = function (eleventyConfig) {
    
    // Custom Sidebar
    eleventyConfig.addPairedShortcode("customSidebar", function(
        content, {id, side = "", colour_backdrop = "", dark_colour_backdrop = "", maxWidth = "", displayClass = ""}
    ) {
        return `
        <div class="${displayClass !== "" ? displayClass : "md:hidden"}">
            <div id="${id}_backdrop" class="z-20 fixed inset-0 hidden backdrop-blur-sm opacity-0 transition-opacity duration-300 
                ${colour_backdrop !== "" ? colour_backdrop : "bg-secondary-qt_grey-darker/50"}
                ${dark_colour_backdrop !== "" ? dark_colour_backdrop : "dark:bg-secondary-qt_grey/50"}"
            ></div>

            <aside id="${id}" class="z-20 fixed top-0 right-0 w-full h-screen 
                flex flex-col gap-y-6 transition-transform duration-300 ease-in-out
                ${maxWidth !== "" ? maxWidth : "max-w-xs"} 
                ${side !== "" ? side : "-translate-x-full"}" 
                data-side="${side !== "" ? side : "-translate-x-full"}"
            >
                ${content}
            </aside>
        </div>
        `;
    });

};
