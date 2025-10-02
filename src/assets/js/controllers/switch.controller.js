export class SwitchController {

    constructor(element) {
        this.element = element;
        this.thumb = document.querySelector(`#${element.id}_thumb`);
        this.is_toggle = false;
        
        this.thumb.addEventListener("click", () => this.toggle());
    }

    toggle() {
        this.is_toggle = !this.is_toggle;
        if (this.is_toggle) {
            this.thumb.classList.remove("translate-x-0");
            this.thumb.classList.add("translate-x-full");
        } else {
            this.thumb.classList.remove("translate-x-full");
            this.thumb.classList.add("translate-x-0");
        }

        this.element.dispatchEvent(new CustomEvent("switchChange", {
            detail: { value: this.is_toggle }
        }));
    }
    
}
