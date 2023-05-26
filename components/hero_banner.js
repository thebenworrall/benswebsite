import { useRef, useState } from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'
import NewSubscriber from '../pages/api/subscribe'

import classes from './hero_banner.module.css'


const HeroBanner = () => {

 const emailInputRef = useRef()

 const [message, setMessage] = useState('')



    const submitHandler = async (event) => {
        event.preventDefault()
        

        const res = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ email: emailInputRef.current.value }),
            headers: {'Content-Type' : 'application/json'}

    })

    const {error} = await res.json()

    if (error) {
        setMessage(error)
        return
    }

    emailInputRef.current.value = ''
    setMessage('Success! You are now subscribed to the newsletter!')

    }

return (

    <Flex className={classes.container}>
        <Image src='/images/ben_photography.jpg' alt='Ben Banner' width="100%" height="auto" />
        <Box className={classes.box}>
        <h2 className={classes.h2}> RETNA </h2>
        <h4 className={classes.h4}> Learning about life. Sharing what I discover. </h4>
        <h1 className={classes.h1}> I share insights on philosophy, psychology, creativity & more. </h1>
        <h1 className={classes.h1}> New articles are released every Sunday.  </h1>
        <form className={classes.form} onSubmit={submitHandler}>
            <input type="text" id="email" placeholder="your email" ref={emailInputRef}/>
            <button  className={classes.button}> Read Now </button>
            {message && <p>{message}</p>}
        </form>
        </Box>
    </Flex>
)

}

export default HeroBanner