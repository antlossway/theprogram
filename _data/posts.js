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

  // const regexObj = /<figure\b[^>]*>[\s\S]*?<\/figure>/gm

  // const modifiedContent = content.replace(regexObj, "")
  // console.log(modifiedContent)

  // return fetch(
  //   `${process.env.WP_REST_API_URL}?_fields=id,title,slug,content&categories[0]=18&per_page=20`
  // )
  //   .then((res) => res.json())
  //   .then((json) => json)

  // .then((json) => console.log(json)) // for debugging

  const res = await fetch(
    `${process.env.WP_REST_API_URL}?_fields=id,title,slug,content&categories[0]=18&per_page=20`
  )
  const data = await res.json()
  const filteredData = data.filter(
    (item) => !item.slug.includes("programme-dun-candidat-libertarien-sommaire")
  )
  return filteredData
  // const posts = data.map((post) => changeContent(post))
  // console.log(posts)
  // return posts
  // return data

  // return content.replace(regexObj, "")
  // return data
}
