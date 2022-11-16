const path = require("path");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(syntaxHighlight);

	// Directory setup
	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src/",
			output: "_site",
			includes: "includes",
			layouts: "layouts",
			data: "content/_data",
		},
	};
};
