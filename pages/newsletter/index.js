import { Flex, Box, Image, chakra } from '@chakra-ui/react'
import NewsletterSubscribe from '../../components/newsletter_subscribe'
import PostsFilter from '../../components/posts_filter'
import BlogPosts from '../../components/blog_posts'
import getPosts from '../api/getPosts'

import classes from './index.module.css'


const NewsletterPage = (props) => {


    return (
            <Flex className={classes.container} flexDirection="column">
                <NewsletterSubscribe />
                {/* <PostsFilter /> */}
                <Flex className={classes.posts_container}> 
                <BlogPosts posts={props.posts} />
                </Flex>
            </Flex>
        )
    
}


export async function getStaticProps() {

   
    const { getBlogPosts } = getPosts();
    const blogPosts = await getBlogPosts();



    return {
        props: { posts: blogPosts }
    }

}

export default NewsletterPage