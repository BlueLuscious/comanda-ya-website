import { BaseErrorHandler } from "./core/errors/index.js";


// TODO: ENHANCE //
document.addEventListener("DOMContentLoaded", async () => {
    const filename = document.body.dataset.filename;

    if (!filename) throw new Error(`Couldn't find the filename`);

    try {
        const page = await import(`./pages/${filename}.page.js`);
        new BaseErrorHandler().handle(() => {
            page.main();
        });
    } catch (err) {
        console.error(`Loading View Error '${filename}':`, err);
    }
});
