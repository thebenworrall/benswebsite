import { Flex, Box, Image, Heading } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'

import classes from './about_me.module.css'

const AboutMe = () => {

    return (

    <Box className={classes.main}>
        <Box className={classes.header}>
        <Heading id="about-section"> About Me </Heading>
        </Box>
        <Box className={classes.container}>
            <Box className={classes.image_container}>
                <img className={classes.img} src="/images/ben_main.jpg" alt="Ben Worrall" height="900" width="900"></img>
                <Box className={classes.social}>
                <SocialIcon url="https://twitter.com/thebenworrall" />
                <SocialIcon url="https://instagram.com/thebenworrall" />
                <SocialIcon url="https://youtube.com/benworrall" />
                </Box>
            </Box>
            <Box className={classes.description}>
                <h1 className={classes.h1}> Hey, I'm Ben!</h1>
                <h2 className={classes.h2}> Let me tell you a little more about myself.</h2>
                <p className={classes.p}>
                 I'm a British writer and teacher currently based in Taipei, Taiwan. I've spent the last decade 
                 deep-diving into a range of esoteric topics including philosophy, spirituality, and the human mind.
                 My goal has always been to develop a big-picture understanding of life, and ultimately, embody this 
                 wisdom.  
                 </p>
                 <p className={classes.p}>
                 I share in-depth philosophical insights in my weekly newsletter, which provides guidance on self-exploration and personal development. 
                 I also plan to utilize my passion for storytelling to produce works of fiction which explore these life-changing ideas through 
                 engaging narrative experiences. 
                 </p>
                 <p className={classes.p}>
                 I'd love for you to follow along on this journey. You can keep up to date with my projects through my social accounts or by joining my newsletter.
                 </p>
            </Box>
        </Box>
    </Box>

    )

}

export default AboutMe