import { Flex, Box, Image, Heading } from '@chakra-ui/react'

import classes from './development.module.css'

const Development = () => {

    return (
        <Flex className={classes.container}>
        <Box className={classes.header}>
        <Heading> Development </Heading>
        </Box>
        <Flex className={classes.description}>
        <Flex flexDirection="column">
        <h1 className={classes.h1}> Creating software </h1>
            <p> I'm a self-taught software developer with an eye for design and functionality. 
            </p>
        </Flex>    
        <Flex>
        <img className={classes.img} src="/images/writing.jpg" alt="writing_notebook" ></img>
        </Flex>
    
        </Flex>
        </Flex>
    )
}

export default Development