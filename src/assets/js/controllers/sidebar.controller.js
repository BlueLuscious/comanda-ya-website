export class SidebarController {

    constructor(sidebar) {
        this.sidebar = sidebar;
        this.sidebarBackdrop = document.getElementById(`${sidebar.id}_backdrop`);
        this.sidebarButton = document.getElementById(`${sidebar.id}_button`);
        this.side = sidebar.dataset.side;

        this.init();
    }

    get isOpen() {
        return !this.sidebar.classList.contains(this.side);
    }

    init() {
        this.sidebarButton.addEventListener("click", () => this.toggleSidebar());
        this.sidebarBackdrop.addEventListener("click", () => this.closeSidebar());
    }

    openSidebar() {
        this.sidebarBackdrop.classList.remove("hidden");
        
        requestAnimationFrame(() => {
            this.sidebarBackdrop.classList.remove("opacity-0");
            this.sidebar.classList.remove(this.side);
        });
    }
    
    closeSidebar() {
        this.sidebarBackdrop.classList.add("opacity-0");
        this.sidebar.classList.add(this.side);
    
        this.sidebarBackdrop.addEventListener("transitionend", () => {
            this.sidebarBackdrop.classList.add("hidden");
        }, { once: true });
    }

    toggleSidebar() {
        this.isOpen ? this.closeSidebar() : this.openSidebar();
    }

}
