// fetch data from wordpress
const fetch = require("node-fetch")

function changeContent(post) {
  return {
    ...post,
    // content: content,
    // content: post?.content.rendered,
    // content: post.content.rendered.replace(process.env.WP_SITE_URL, "")
    // content: post.content.rendered,
  }
}

module.exports = async function () {
  console.log("Fetching data...")

  // test regex
  //   const content = `hello<figure class="wp-block-embed is-type-wp-embed is-provider-unices-org wp-block-embed-unices-org"><div class="wp-block-embed__wrapper"><blockquote class="wp-embedded-content" data-secret="JD4Lovp5DI"><a href="https://unices.org/wordpress/index.php/2024/03/02/programme-dun-candidat-libertarien-sommaire/">Programme d&#8217;un candidat Libertarien. Sommaire.</a></blockquote><iframe class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; clip: rect(1px, 1px, 1px, 1px);" title="&#8220;Programme d&#8217;un candidat Libertarien. Sommaire.&#8221; &#8212; Unices.org" src="https://unices.org/wordpress/index.php/2024/03/02/programme-dun-candidat-libertarien-sommaire/embed/#?secret=8LRF7HK98C#?secret=JD4Lovp5DI" data-secret="JD4Lovp5DI" width="600" height="338" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
  // </div></figure>`

  // const regexObj = /<figure\b[^>]*>[\s\S]*?<\/figure>/gm

  // const modifiedContent = content.replace(regexObj, "")
  // console.log(modifiedContent)

  return fetch(
    `${process.env.WP_REST_API_URL}?_fields=id,title,content&categories[0]=18&per_page=20`
  )
    .then((res) => res.json())
    .then((json) => json)
  // .then((json) => console.log(json)) // for debugging

  // const res = await fetch(
  //   `${process.env.WP_REST_API_URL}?_fields=id,title,content&categories[0]=18&per_page=20`
  // )
  // const data = await res.json()
  // const posts = data.map((post) => changeContent(post))
  // console.log(posts)
  // return posts
  // return data

  // return content.replace(regexObj, "")
  // return data
}
