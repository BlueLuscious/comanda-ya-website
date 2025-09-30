/**
 * Type Writing Effect
 * @param {string} id Element ID
 * @param {string} value String to type.
 * @param {string[]} [highlightWords=[]] Words to highlight.
 * @param {string} [highlightWordsClasses=""] Classes highlight words.
 */
export function typeWritingEffect(id, value, highlightWords = [], highlightWordsClasses = "") {
    if (!value) return;

    const escapedWords = highlightWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedWords.join("|")})`, "gi");

    const formatted = value.replace(regex, match => {
        return `<span class="${highlightWordsClasses}">${match}</span>`;
    });

    new TypeIt(`#${id}`, {
        strings: formatted,
        speed: 100,
        waitUntilVisible: true,
        cursorChar: `<span class="text-secondary-qt_grey-darkest dark:text-secondary-qt_grey-lightest">|</span>`,
    }).go();
}
