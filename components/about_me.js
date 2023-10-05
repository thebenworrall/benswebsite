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
                I'm a writer and teacher from the UK, currently based in Taipei, Taiwan. 
                I graduated from Bournemouth University in 2014 with an undergradute degree in 
                Scriptwriting for Film and Television. 
                 </p>
                 <p className={classes.p}>
                My interests have always seemed to revolve around the more existential aspects of life including 
                philosophy, psychology, and human development. Therefore, both my creative writing and educational 
                content tends to lean heavily into these areas. The plan is for my website to be a base for future projects. 
                 </p>
                 <p className={classes.p}>
                You can follow my various social media channels or subscribe to my newsletter to receive 
                my unique insights on life, art, and also some general updates.  
                 </p>
            </Box>
        </Box>
    </Box>

    )

}

export default AboutMe