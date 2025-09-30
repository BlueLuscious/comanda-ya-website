const i18nFilter = require("./filters/i18nFilter.js")
const customAnchor = require("./shortcodes/customAnchor.js");
const customButton = require("./shortcodes/customButton.js");
const customCard = require("./shortcodes/customCard.js");
const customSidebar = require("./shortcodes/customSidebar.js");
const customSwitch = require("./shortcodes/customSwitch.js");
const langSelector = require("./shortcodes/langSelector.js");

module.exports = function(eleventyConfig) {
  i18nFilter(eleventyConfig);
  customAnchor(eleventyConfig);
  customButton(eleventyConfig);
  customCard(eleventyConfig);
  customSidebar(eleventyConfig);
  customSwitch(eleventyConfig);
  langSelector(eleventyConfig);
};
