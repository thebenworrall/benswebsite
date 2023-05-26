import { useRef, useState } from 'react'
import { Flex, Box, Image, chakra } from '@chakra-ui/react'

import classes from './newsletter_subscribe.module.css'

const NewsletterSubscribe = () => {


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
        <Flex className={classes.letter_signup} flexDirection="column" width="100%" height="300px"> 
                    <h1 className={classes.h1}> New posts to your inbox</h1>
                    <p className={classes.p}> Don't miss a post! Join my mailing list and get news post sent straight to your inbox.</p>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <input ref={emailInputRef} placeholder='your email' />
                        <button className={classes.button}> Join now </button>
                        {message && <p>{message}</p>}
                    </form>
        </Flex>
    )

}

export default NewsletterSubscribe