import { BaseThemeController } from "./base/base-theme.controller.js";


export class ThemeButtonController extends BaseThemeController {

    constructor(element, themeManager, { iconSun = "bi-sun-fill", iconMoon = "bi-moon-fill" } = {}) {
        super(element, themeManager);
        this.iconSun = iconSun;
        this.iconMoon = iconMoon;

        this.element.addEventListener("click", () => this.toggleTheme());
        this.updateUI();
    }

    updateUI() {
        const isDark = this.themeManager.getTheme() === "dark";
        const icon = this.element.querySelector("i");
        if (icon) {
            icon.classList.replace(
                isDark ? this.iconSun : this.iconMoon, 
                isDark ? this.iconMoon : this.iconSun
            )
        }
    }

}
