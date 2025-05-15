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
                  I'm a British writer and teacher currently based in Taipei, Taiwan. I've dedicated the past decade to deepening my understanding of life.
                 </p>
                <p className={classes.p}>Having read over 150 books on philosophy, psychology, and spirituality, I've been inspired by wisdom teachings from across human history. I believe humanity is still in its infancy—and that our potential is limitless. But to take the next step in our evolution, we need to turn inward. This means developing a deeper understanding of the human mind, consciousness, and our place in the universe. It means staying open to the legitimacy of ideas across time and cultures. It means creating new, inclusive maps to help individuals navigate the mysterious waters in which we swim.</p>
                 <p className={classes.p}>My role is simple: I’m committed to reaching ever higher levels of wisdom and sharing these understandings through my art—thought-provoking essays, fiction, and multimedia experiences. My aim is to create stories that are both entertaining and insightful, that hook you and transform you.</p>
                 <p className={classes.p}>
                 If this sounds interesting, I’d love for you to follow along on my journey. You can keep up with my work by joining the <i>Adventures of the Mind</i> newsletter, where I release free essays and stories almost every week.
                 </p>
            </Box>
        </Box>
    </Box>

    )

}

export default AboutMe