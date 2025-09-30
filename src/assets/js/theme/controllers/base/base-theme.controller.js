export class BaseThemeController {

    constructor(element, themeManager) {
        this.element = element;
        this.themeManager = themeManager;

        this.themeManager.addEventListener("themechange", () => this.updateUI());
    }

    toggleTheme() {
        this.themeManager.toggleTheme();
        this.updateUI();
    }

    updateUI() {}
    
}
