export class LangSelectorController {

    constructor(selector) {
        this.selector = selector;
        this.selectorButton = this.selector.querySelector(`#${selector.id}_button`);
        this.buttonIcon = this.selectorButton.querySelector("i");
        this.dropdown = this.selector.querySelector(`#${selector.id}_dropdown`);

        this.init();
    }

    get isOpen() {
        return this.dropdown.classList.contains("opacity-100");
    }

    init() {
        this.selectorButton.addEventListener("click", (e) => {
            e.stopPropagation();
            this.toggleSelector();
        });

        document.addEventListener("click", (e) => {
            if (!this.selector.contains(e.target)) {
                this.closeSelector();
            }
        });
    }
    
    openSelector() {
        this.buttonIcon.classList.add("rotate-180")
        this.dropdown.classList.remove("scale-95", "opacity-0", "pointer-events-none");
        this.dropdown.classList.add("scale-100", "opacity-100");
    }

    closeSelector() {
        this.buttonIcon.classList.remove("rotate-180")
        this.dropdown.classList.remove("scale-100", "opacity-100");
        this.dropdown.classList.add("scale-95", "opacity-0", "pointer-events-none");
    }

    toggleSelector() {
        this.isOpen ? this.closeSelector() : this.openSelector();
    }

}
