module.exports = function (eleventyConfig) {
    
    // Custom Card
    eleventyConfig.addPairedShortcode("customCard", function(content, {id, item}) {
        return `
            <article id="${id}_card" class="flex flex-col w-full rounded-lg shadow-md overflow-hidden transition-transform duration-300
                group-hover/card-stack:scale-90 hover:scale-100"
            >
                ${item?.image || item?.imageDark ? `
                    <div class="size-full min-h-64 ${item?.image ?? ""} ${item?.imageDark ?? ""} 
                        bg-center bg-cover bg-no-repeat transition-discrete duration-300 ease-in-out"
                    ></div>
                ` : ""}

                <div class="flex flex-col gap-y-4 size-full min-h-64 p-6 bg-white dark:bg-secondary-qt_grey-darker 
                    transition-colors duration-300 ease-in-out"
                >
                    ${item?.title ? `
                        <h1 class="text-xl text-secondary-qt_grey-darker dark:text-secondary-qt_grey-lighter font-semibold">
                            ${item.title}
                        </h1>
                    `: ""}

                    ${item?.description ? `
                        <p class="text-secondary-qt_grey-dark dark:text-secondary-qt_grey-light">${item.description}</p>
                    `: ""}
                    
                    ${content}
                </div>
            </article>
        `;
    });

};
