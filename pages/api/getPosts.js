import { createClient } from "contentful"



const getPosts = () => {
 

const client = createClient({
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
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

        id: post.fields.id,
        date: post.fields.date,
        title: post.fields.mainTitle, 
        teaser: post.fields.teaser,
        content: post.fields.blogContent,
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
