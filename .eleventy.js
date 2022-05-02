module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  // Return your Object options:
  return {
    passthroughFileCopy: true,
    dir: {
      input: "_source",
      output: "docs"
    }
  }
};