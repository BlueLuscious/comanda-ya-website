import { BaseThemeController } from "./base/base-theme.controller.js";


export class ThemeSwitchController extends BaseThemeController {

    constructor(element, themeManager) {
        super(element, themeManager);
        this.thumb = document.querySelector(`#${element.id}_thumb`);

        this.thumb.addEventListener("click", () => this.toggleTheme());
        this.updateUI();
    }

    updateUI() {
        const isDark = this.themeManager.getTheme() === "dark";
        if (isDark) {
            this.thumb.classList.remove("translate-x-0");
            this.thumb.classList.add("translate-x-full");
        } else {
            this.thumb.classList.remove("translate-x-full");
            this.thumb.classList.add("translate-x-0");
        }
    }
    

}
