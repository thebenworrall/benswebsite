import { Flex, Box, Image, Heading, Card, CardHeader, CardBody, CardFooter  } from '@chakra-ui/react'

import HeroBanner from '../components/hero_banner'
import AboutMe from '../components/about_me'
import Writing from '../components/writing'
import Development from '../components/development'
import Newsletter from '../components/newsletter_box'

import classes from './index.module.css'

const HomePage = () => {

    return (
    <>
    <div className ={classes.container}>
        <HeroBanner />
        <AboutMe />
        <Writing />
        <Development />
        <Newsletter />
    </div>
    </>
    )
}

export default HomePage