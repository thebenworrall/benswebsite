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
      select: 'fields, metadata.tags', 
      order: 'fields.date'
    })


    const sanitizedBlogPosts = blogPosts.items.map( post => {


        const blogPost = {
      
        id: post.fields.id,
        date: post.fields.date,
        title: post.fields.mainTitle, 
        teaser: post.fields.teaser,
        content: post.fields.blogContent,
        mainImage: post.fields.mainImage.fields.file.url, 
        tags: post.metadata.tags,
        key: post.fields.id
        

      }

      return blogPost 
        
    })

    return sanitizedBlogPosts

  } catch (error) {
    return []
  }
}


///NEW API CALL 


// const getBlogPostById = async (postId) => {
//   try {
//     const entry = await client.getEntry(postId);
//     if (!entry) return null;

//     return {
//       id: entry.sys.id,
//       date: entry.fields.date,
//       title: entry.fields.mainTitle, 
//       teaser: entry.fields.teaser,
//       content: entry.fields.blogContent,
//       mainImage: entry.fields.mainImage.fields.file.url,
//       tags: entry.metadata.tags
//     };
//   } catch (error) {
//     console.log(`Error fetching blog post ${error}`);
//     return null;
//   }
// };


// NEW OPTIMIZED FUNCTIONS

const getBlogPostSummaries = async () => {
  try {
    const blogPosts = await client.getEntries({
      content_type: 'blogPost', 
      select: 'fields.id,fields.date,fields.mainTitle,fields.teaser,fields.mainImage,metadata.tags', 
      order: 'fields.date'
    })

    const sanitizedBlogPosts = blogPosts.items.map( post => {
      const blogPost = {
        id: post.fields.id,
        date: post.fields.date,
        title: post.fields.mainTitle, 
        teaser: post.fields.teaser,
        mainImage: post.fields.mainImage.fields.file.url, 
        tags: post.metadata.tags,
        key: post.fields.id
      }
      return blogPost 
    })

    return sanitizedBlogPosts
  } catch (error) {
    return []
  }
}

const getBlogPostById = async (postId) => {
  try {
    const blogPosts = await client.getEntries({
      content_type: 'blogPost', 
      select: 'fields, metadata.tags', 
      'fields.id': postId
    })

    if (blogPosts.items.length === 0) return null

    const post = blogPosts.items[0]
    const blogPost = {
      id: post.fields.id,
      date: post.fields.date,
      title: post.fields.mainTitle, 
      teaser: post.fields.teaser,
      content: post.fields.blogContent,
      mainImage: post.fields.mainImage.fields.file.url, 
      tags: post.metadata.tags,
      key: post.fields.id
    }

    return blogPost
  } catch (error) {
    return null
  }
}

//RETURNING 

return { getBlogPosts, getBlogPostSummaries, getBlogPostById };

}

export default getPosts
