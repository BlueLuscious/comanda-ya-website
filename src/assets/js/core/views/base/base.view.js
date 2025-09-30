import { ThemeManager } from "../../../theme/index.js";


/**
 * Base Class for a specific template Script.
 */
export class BaseView {

    /**
     * BaseView Initializer.
     */
    constructor() {
        this.lang = document.documentElement.lang;
        this.themeManager = new ThemeManager();
    }

    /**
     * Initialize view script.
     */
    init() {}

}
