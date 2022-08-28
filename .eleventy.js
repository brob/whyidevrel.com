const svgContents = require("eleventy-plugin-svg-contents");
const blogTools = require("eleventy-plugin-blog-tools");

// export 11ty config
module.exports = function(eleventyConfig) {
// passthrough assets folder
eleventyConfig.addPassthroughCopy("assets");       
eleventyConfig.addPlugin(svgContents);
eleventyConfig.addPlugin(blogTools);

}