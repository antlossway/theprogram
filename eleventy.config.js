// module.exports = function () {
//   require("dotenv").config()
// }

module.exports = function (eleventyConfig) {
  // Output directory: _site
  //   eleventyConfig.addPassthroughCopy("./style.css")
  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.addPassthroughCopy({ "assets/favicon": "/" })

  eleventyConfig.addFilter("removeWpEmbedUrl", (content) => {
    // remove the program summary embed from posts
    // const regexObj = new RegExp(
    //   `<figure class="wp-block-embed.*${process.env.WP_SITE_URL}.*programme-dun-candidat-libertarien-sommaire.*</figure>`,
    //   "gm"
    // )
    const regexObj = /<figure\b[^>]*>[\s\S]*?<\/figure>/gm

    const modifiedContent = content.replace(regexObj, "")
    return modifiedContent
  })

  require("dotenv").config()
}
