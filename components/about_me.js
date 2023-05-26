import { Flex, Box, Image, Heading } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'

import classes from './about_me.module.css'

const AboutMe = () => {

    return (

    <Flex height="100%" width="100%"  flexDirection="column"  >
        <Box className={classes.header}>
        <Heading> About Me </Heading>
        </Box>
        <Flex className={classes.container}>
            <Flex className={classes.image_container}>
                <img className={classes.img} src="/images/ben_main.jpg" alt="Ben Worrall" height="900" width="900"></img>
                <Flex className={classes.social} flexDirection="row" justifyContent="space-around">
                <SocialIcon url="https://twitter.com/thebenworrall" />
                <SocialIcon url="https://instagram.com/thebenworrall" />
                <SocialIcon url="https://youtube.com/benworrall" />
                </Flex>
            </Flex>
            <Box className={classes.description}>
                <h1 className={classes.h1}> Hey, I'm Ben!</h1>
                <h2 className={classes.h2}> Let me tell you a little more about myself.</h2>
                <p className={classes.p}>
                     I'll be honest with you, I'm interested in a lot of things.
                     Over the last decade I have spent much of my time learning about a range of topics,
                     but what I'm most passionate about is the mind & consciousness. 
                 </p>
                 <p className={classes.p}>
                    Curiosity and creativity are the main driving forces behind my work. My life goal is to understand
                    Reality at the deepest levels through research, observation and contemplation. I'll then combine
                    my understanding with the mediums of storytelling and technology to create innovative products for 
                    the benefit of mankind. 
                 </p>
                 <p className={classes.p}>
                    For me, this project is not a passing fad or even a career, but a lifelong commitment to understanding. 
                    I'd love for you to follow along on my journey of discovery, the best way to do that would be to 
                    subscribe to my newsletter and follow my social media accounts. 
                 </p>
            </Box>
        </Flex>
    </Flex>

    )

}

export default AboutMe