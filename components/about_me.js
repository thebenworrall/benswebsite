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
                <SocialIcon url="https://instagram.com/themindadventures" />
                <SocialIcon url="https://youtube.com/themindadventures" />
                </Box>
            </Box>
            <Box className={classes.description}>
                <h1 className={classes.h1}> Hey, I'm Ben!</h1>
                <h2 className={classes.h2}> Let me tell you a little more about myself.</h2>
                <p className={classes.p}>
                  I'm a British writer and teacher based in Taipei, Taiwan. My work explores creativity and consciousness through transformative essays, fiction, and visual storytelling.
                 </p>
                <p className={classes.p}> I've spent the last decade deep diving into a wide range of philosophical ideas. My research has convinced me that we must look inward—developing deeper insights into the human mind while remaining open to wisdom across cultures and eras.</p>
                 <p className={classes.p}>
                 You can also follow my latest work through my newsletter, with new essays and stories each week.
                </p>
            </Box>
        </Box>
    </Box>

    )

}

export default AboutMe