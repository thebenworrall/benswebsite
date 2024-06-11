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
            <div className={classes.box_content}>
                   <h1 className={classes.title}> BEN WORRALL </h1>
                   <h1 className={classes.subtitle}> Learning about life. Sharing the discoveries.</h1>
                    <p className={classes.p}> I publish newsletters on a variety of topics including philosophy, psychology, art, creativity, and self-development.</p>
                    <p className={classes.p}>Subscribe and get mind-expanding insights sent directly to your inbox upon release.</p>  
                    <form className={classes.form} onSubmit={submitHandler}>
                        <input className={classes.input} type="text" id="email" placeholder="your email" ref={emailInputRef}/>
                        <button  className={classes.button}> Subscribe </button>
                        {message && <p>{message}</p>}
                    </form>
            </div>
        </Box>
    </Flex>
)

}

export default HeroBanner