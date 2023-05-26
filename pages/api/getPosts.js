import { createClient } from "contentful"

const accessTokenId = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
const spaceId = process.env.CONTENTFUL_SPACE_ID

const getPosts = () => {

const client = createClient({
  accessToken: accessTokenId,
  space: spaceId,
  host: 'preview.contentful.com'
})

const getBlogPosts = async () => {

  try {
    const blogPosts = await client.getEntries({
      content_type: 'blogPost', 
      select: 'fields', 
      order: 'fields.date'
    })

    const sanitizedBlogPosts = blogPosts.items.map( post => {

        const blogPost = {

        date: post.fields.date,
        title: post.fields.mainTitle, 
        text: post.fields.mainText, 
        mainImage: post.fields.mainImage.fields.file.url
        //const secondaryImages 

      }

      return blogPost 
        
    })

    return sanitizedBlogPosts

  } catch (error) {
    console.log(`Error fetching blog posts ${error}`)
  }
}

return { getBlogPosts }

}

export default getPosts

// const res = await fetch('https://cdn.contentful.com', {
//     headers: {
//         'Authorization: Bearer'
//     }
// })

// const data = res. 

// const contentful = require('contentful')

// const client = contentful.createClient({
//   space: 'mjoieruskqzy',
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: 'qiuBBUHKwj1QGWMOtyN0yXlSAyYJM0SZ0KtRMxh9O4E'
// })

// client.getEntry('4jECoG33LEbSicwhOLaAIj')
// .then((entry) => console.log(entry))
// .catch(console.error)
