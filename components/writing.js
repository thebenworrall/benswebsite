import { Flex, Box, Image, Heading } from '@chakra-ui/react'

import classes from './writing.module.css'

const Writing = () => {


    return (
        <Flex height="100%" width="100%"  flexDirection="column" alignItems="center" justifyContent="center">
        <Box className={classes.header}>
        <Heading> Writing </Heading>
        </Box>
        <Flex className={classes.container}>
        <Flex flexDirection="column">
        <h1 className={classes.h1}> A Philisophical Storyteller</h1>
            <p> I have been interested in writing and storytelling since I was a child. I graduated from
                Bournemouth University with an undergraduate degree in Scriptwriting for Film & Television
                back in 2014.
            </p>
            <p>
                I have written multiple screenplays, short-stories and flash-fiction pieces over the last couple
                of years. While I haven't yet released any books my plan is to write both philosophy and 
                philosophical fiction. 
            </p>
        </Flex>    
        <Flex>
        <img className={classes.img} src="/images/writing.jpg" alt="writing_notebook" ></img>
        </Flex>
    
        </Flex>
        </Flex>
    )

}

export default Writing