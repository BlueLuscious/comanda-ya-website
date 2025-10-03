import { BaseView } from "../core/views/index.js";

import { LangSelectorController } from "../controllers/lang-selector.controller.js";
import { SidebarController } from "../controllers/sidebar.controller.js";
import { ThemeButtonController, ThemeSwitchController } from "../theme/index.js";


export class CustomBaseView extends BaseView {

    init() {
        // Begin Menu Sidebar //
        const menuSidebar = document.getElementById("sidebar_menu");
        if (menuSidebar) { 
            const sidebarController = new SidebarController(menuSidebar);

            const menuSidebarCloseBtn = document.getElementById("sidebar_menu_close");
            if (menuSidebarCloseBtn) {
                menuSidebarCloseBtn.addEventListener("click",() => sidebarController.closeSidebar());
            }
        
            const menuSidebarLinks = document.querySelectorAll(".nav-link");
            if (menuSidebarLinks) {
                menuSidebarLinks.forEach(link => {
                    link.addEventListener("click", () => sidebarController.closeSidebar());
                });
            }
        }
        // End Menu Sidebar //
    
        // Begin Language Selector //
        // const langSelector = document.getElementById("lang_selector");
        // if (langSelector) new LangSelectorController(langSelector);
        // End Language Selector //
    
        // Begin Theme Manager //
        const themeSwitch = document.getElementById("theme_switch");
        if (themeSwitch) new ThemeSwitchController(themeSwitch, this.themeManager);

        const themeButton = document.getElementById("theme_button");
        if (themeButton) {
            new ThemeButtonController(themeButton, this.themeManager, { iconSun: "bi-moon-fill", iconMoon: "bi-sun-fill" });
        }
        // End Theme Manager //
    }

}
