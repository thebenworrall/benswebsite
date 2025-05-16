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
                  I'm a British writer and teacher based in Taipei, Taiwan who's spent the past decade exploring the depths of human understanding.
                 </p>
                <p className={classes.p}> My journey through philosophy, psychology, and spirituality has convinced me that humanity's potential remains largely untapped. To evolve further, we must look inward—developing deeper insights into consciousness and our place in the universe while remaining open to wisdom across cultures and eras.</p>
                <p className={classes.p}> I share these explorations through essays, fiction, and multimedia that aim to both entertain and transform. My work creates bridges between ancient wisdom and modern challenges, offering new maps for navigating life's complexities. </p>
                 <p className={classes.p}>
                 Join my <i>Adventures of the Mind</i> newsletter, for weekly essays and stories that invite you to explore alongside me.
                </p>
            </Box>
        </Box>
    </Box>

    )

}

export default AboutMe