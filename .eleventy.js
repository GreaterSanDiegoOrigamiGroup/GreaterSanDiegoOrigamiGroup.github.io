module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");

  return {
    htmlTemplateEngine: "liquid",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    }
  };
};