export class ThemeManager extends EventTarget {

    constructor() {
        super();
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        this.theme = saved ?? (prefersDark ? "dark" : "light");
        this.setTheme(this.theme);
    }

    getTheme() {
        return this.theme;
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
        this.dispatchEvent(new Event("themechange"));
    }

    toggleTheme() {
        const newTheme = this.theme === "dark" ? "light" : "dark";
        this.setTheme(newTheme);
    }

}
