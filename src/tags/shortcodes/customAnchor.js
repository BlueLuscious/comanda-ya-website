module.exports = function (eleventyConfig) {
    
    // Custom Anchor
    eleventyConfig.addShortcode("customAnchor", function({id, href, label="", icon="bi-circle", iconFilled="bi-circle-fill", extraClasses=""}) {
        return `
            <a id="${id}" href="${href}" 
                onmouseenter="changeIcon(this, '${icon}', '${iconFilled}')" 
                onmouseleave="changeIcon(this, '${iconFilled}', '${icon}')" 
                class="flex items-center p-2 backdrop-blur-md backdrop-brightness-75 rounded-lg transition-all 
                duration-500 ease-in-out hover:backdrop-grayscale-50 hover:animate-medium_glow_pulse ${extraClasses}"
            >
                ${icon ? `<i class="bi ${icon} text-2xl"></i>` : ""}
                ${label ? `<span class="w-full">${label}</span>` : ""}
            </a>
        `;
    });

};
