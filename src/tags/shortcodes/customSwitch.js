module.exports = function (eleventyConfig) {
    
    // Custom Switch
    eleventyConfig.addShortcode("customSwitch", function(
        {id, leftIcon="", rightIcon="", extraClasses="", leftIconClasses="", rightIconClasses="", thumbClasses=""}
    ) {
        return `
            <div id="${id}" class="relative flex items-center size-full max-h-16 border-4 rounded-full 
                transition-colors duration-300 ease-in-out ${extraClasses}"
            >    
                <div id="${id}_track" class="grid grid-cols-2 place-items-center w-full">
                    ${leftIcon !== "" ? `<i class="bi ${leftIcon} col-start-1 col-end-2 ${leftIconClasses}"></i>` : ""}
                    ${rightIcon !== "" ? `<i class="bi ${rightIcon} col-start-2 col-end-3 ${rightIconClasses}"></i>` : "" }

                    <div id="${id}_thumb" class="absolute top-0 left-0 bottom-0 w-1/2 rounded-full shadow-md 
                        translate-x-0 transform transition-all duration-300 cursor-pointer ${thumbClasses}"
                    ></div>
                </div>
            </div>
        `;
    });

};
