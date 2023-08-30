import { Flex, Box, Image, chakra } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import getPosts from '../api/getPosts'
import NewsletterSubscribe from '../../components/newsletter_subscribe'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React, { useEffect, useState } from 'react'

import classes from './blogId.module.css'





const BlogDetails = (props) => {

const router = useRouter()

const blogId = router.query.blogId


const isCurrentPost = (post) => {
    return post.id === blogId
}

const currentPost = props.posts.find(isCurrentPost)


const [contentComponents, setContentComponents] = useState(null);

useEffect(() => {

  if (currentPost.content) {
    setContentComponents(documentToReactComponents(currentPost.content));
  }
}, [currentPost.content]);


    return (
        <>
        <Flex className={classes.main}>
        <h1 className={classes.title}> {currentPost.title} </h1>
        <p> Published by Ben Worrall on {currentPost.date} </p>
        <Flex className={classes.content}>
        <div className={classes.imageContainer}><Image className={classes.image} src={currentPost.mainImage}/></div>
        <div className={classes.textContainer}><Box className={classes.main_text}>{contentComponents}</Box></div>
        
        </Flex>
        </Flex>
        <div>
        <NewsletterSubscribe className={classes.newsletter_subscribe} />    
        </div>
        </>
    )
      
}

export async function getStaticPaths() {

    const { getBlogPosts } = getPosts();
    const blogPosts = await getBlogPosts();


return {
    fallback: false, 
    paths: blogPosts.map((blogpost) => ({
        params: { blogId: blogpost.id.toString() }
    }))
}
}

export async function getStaticProps() {

    const { getBlogPosts } = getPosts();
    const blogPosts = await getBlogPosts();


    return {
        props: { posts: blogPosts }
    }
}

export default BlogDetails