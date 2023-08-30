import { Flex, Box, Image, Heading } from '@chakra-ui/react'

import classes from './newsletter.module.css'
import RecentPosts from './recent_posts'



const Newsletter = (props) => {


    return (
        
        <Flex className={classes.container}>
            <Box className={classes.header}>
                <Heading className={classes.h1}> Newsletter </Heading>
                <h2> Explore my latest ideas on philosophy, psychology, and self-development. </h2>
            </Box>
            <Flex>
            <RecentPosts posts={props.posts} />
            </Flex>
        </Flex>
    )

}


export default Newsletter