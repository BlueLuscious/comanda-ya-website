/**
 * Change bootstrap icons.
 * @param {HTMLElement} element Element with icon.
 * @param {string} current Current Bootstrap Icon.
 * @param {string} replacement Replacement Bootstrap Icon.
 */
export function changeIcon(element, current, replacement) {
    const icon = element.querySelector("i");
    if (icon) {
        icon.classList.replace(current, replacement);
    }
};
