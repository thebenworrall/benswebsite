import { useRef, useState } from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'

import classes from './hero_banner.module.css'


const HeroBanner = () => {

 const emailInputRef = useRef()

 const [message, setMessage] = useState('')
 const [isLoading, setIsLoading] = useState(false)



    const submitHandler = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        setMessage('')
        
        try {
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
        } catch (error) {
            setMessage('Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

return (

    <Flex className={classes.container}>
        <Image src='/images/ben_photography.jpg' alt='Ben Banner' className={classes.heroImage} /> 
        <Box className={classes.box}>
            <div className={classes.box_content}>
                   <h1 className={classes.title}> BEN WORRALL </h1>
                   <h1 className={classes.subtitle}> Learning about life. Sharing the discoveries.</h1>
                    <p className={classes.p}> I write essays and stories about consciousness, creativity, and the human experience.</p>
                    <p className={classes.p}>Join the Adventures of the Mind newsletter for new releases each week.</p>  
                    <form className={classes.form} onSubmit={submitHandler}>
                        <input className={classes.input} type="text" id="email" placeholder="your email" ref={emailInputRef}/>
                        <button className={classes.button} disabled={isLoading}>
                            {isLoading ? 'Subscribing...' : 'Subscribe'}
                        </button>
                        {message && <p>{message}</p>}
                    </form>
            </div>
        </Box>
    </Flex>
)

}

export default HeroBanner