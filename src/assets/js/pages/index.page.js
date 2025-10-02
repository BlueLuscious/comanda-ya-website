import { BaseView } from "../core/views/index.js";

import { LangSelectorController } from "../controllers/lang-selector.controller.js";
import { SidebarController } from "../controllers/sidebar.controller.js";
import { ThemeSwitchController } from "../theme/index.js";


export class IndexView extends BaseView {

    init() {
        super.init();

        // Begin Menu Sidebar //
        const menuSidebar = document.getElementById("sidebar_menu");
        const sidebarController = new SidebarController(menuSidebar);

        const menuSidebarCloseBtn = document.getElementById("sidebar_menu_close");
        menuSidebarCloseBtn.addEventListener("click",() => sidebarController.closeSidebar());
    
        const menuSidebarLinks = document.querySelectorAll(".nav-link");
        menuSidebarLinks.forEach(link => {
            link.addEventListener("click", () => sidebarController.closeSidebar());
        });
        // End Menu Sidebar //

        // Begin Forms //
        const demoMenu = document.getElementById("demo_form_sidebar");
        const demoMenuController = new SidebarController(demoMenu);

        const demoMenuOpenBtns = document.querySelectorAll("[data-demo-form-open]");
        demoMenuOpenBtns.forEach(btn => {
            btn.addEventListener("click",() => demoMenuController.openSidebar());
        });

        const demoMenuCloseBtn = document.getElementById(`${demoMenuController.sidebar.id}_close`);
        demoMenuCloseBtn.addEventListener("click",() => demoMenuController.closeSidebar());

        document.getElementById("demo_form").addEventListener("submit", function(e) {
            e.preventDefault();

            const full_name = document.querySelector("[name='full_name']").value;
            const email = document.querySelector("[name='email']").value;
            const phone_number = document.querySelector("[name='phone_number']").value;
            const resto_name = document.querySelector("[name='resto_name']").value;
            const business_type = document.querySelector("[name='business_type']").value;
            const tables_qt = document.querySelector("[name='tables_qt']").value;
            const location = document.querySelector("[name='location']").value;
            const comments = document.querySelector("[name='comments']").value;

            const subject = encodeURIComponent("Solicitud de demo");
            const body = encodeURIComponent(
                `Nombre completo: ${full_name}.
                Email: ${email}.
                Teléfono: ${phone_number}.
                Nombre del restaurante: ${resto_name}.
                Tipo de negocio: ${business_type}.
                Cantidad de mesas aproximada: ${tables_qt} mesas.
                Ubicación del local: ${location}.
                Comentarios: ${comments}.`
            );

            const receiver = "info@comandaya.com.ar" // TODO: Change email
            window.location.href = `mailto:${receiver}?subject=${subject}&body=${body}`;
        });
        // End Forms //
    
        // Begin Language Selector //
        const langSelector = document.getElementById("lang_selector");
        new LangSelectorController(langSelector);
        // End Language Selector //
    
        // Begin Theme Manager //
        const themeSwitch = document.getElementById("theme_switch");
        new ThemeSwitchController(themeSwitch, this.themeManager);
        // End Theme Manager //

        // Begin Animate Elements // // TODO: Create --> Method
        const elements = document.querySelectorAll("[data-animate]");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade_in_up");
                }
            });
        });
        elements.forEach(el => observer.observe(el));
        // End Animate Elements //

        // Set Redirect to `/es/` when the url is `/`
        if (location.pathname == "/") { window.location.href = `/${this.lang}/`; }
        // TODO: REFACTOR //
    }

}

export function main() {
    new IndexView().init();
}
