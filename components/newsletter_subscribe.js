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

       console.log(error)
   
       if (error) {
           setMessage(error)
           return
       }
   
       emailInputRef.current.value = ''
       setMessage('Success! You are now subscribed to the newsletter!')
   
       }

    return (
        <Flex className={classes.letter_signup} flexDirection="column" width="100%" height="280px"> 
            <div className={classes.container}>
                    <h1 className={classes.h1}> Join the Newsletter </h1>
                    <h2 className={classes.h2}> </h2>
                    <p className={classes.p}> Don't miss a post! Be the first to gain access to new articles, stories,
                                              and exclusive content. </p>
                
                    
                    <form className={classes.form} onSubmit={submitHandler}>
                        <input className={classes.input} ref={emailInputRef} placeholder='your email' />
                        <button className={classes.button}> Subscribe </button>
                        {message && <p>{message}</p>}
                    </form>
            </div>
        </Flex>
    )

}

export default NewsletterSubscribe