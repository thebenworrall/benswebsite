import { Flex, Box, Image, chakra } from '@chakra-ui/react'
import NewsletterSubscribe from '../../components/newsletter_subscribe'

import BlogPosts from '../../components/blog_posts'

import classes from './index.module.css'

const NewsletterPage = () => {

    return (
            <Flex className={classes.container} flexDirection="column">
                <NewsletterSubscribe />
                <Flex className={classes.posts_container}> 
                     <BlogPosts />
                </Flex>
            </Flex>
        )
    

}

export default NewsletterPage