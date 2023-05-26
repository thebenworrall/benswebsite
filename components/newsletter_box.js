import { Flex, Box, Image, Heading } from '@chakra-ui/react'

import classes from './newsletter.module.css'


const NewsletterBox = () => {

    return (
        
        <Flex height="100vh"  flexDirection="column" alignItems="center" justifyContent="center">
            <Box className={classes.header}>
                <Heading className={classes.h1}> Newsletter </Heading>
                <h2> Explore my latest ideas philosophy, psychology and creativity. </h2>
            </Box>
            <Flex>
                <p>Newsletter content goes here.</p>
            </Flex>
        </Flex>
    )

}

export default NewsletterBox