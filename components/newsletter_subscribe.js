import { useRef, useState } from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'

import classes from './newsletter_subscribe.module.css'

const NewsletterSubscribe = () => {
  const emailInputRef = useRef()
  const [message, setMessage] = useState('')

  const submitHandler = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: emailInputRef.current.value }),
      headers: { 'Content-Type': 'application/json' },
    })

    const { error } = await res.json()
    if (error) {
      setMessage(error)
      return
    }

    emailInputRef.current.value = ''
    setMessage('Success! You are now subscribed to the newsletter!')
  }

  return (
<Flex className={classes.letter_signup} flexDirection={{ base: 'column', md: 'row' }} width="100%" height="auto" align="center" p={4}>
  {/* Logo Section */}
  <Box className={classes.logoWrapper}>
    <Image src="images/aotm_logo.png" alt="Adventures of the Mind logo" className={classes.logo} />
  </Box>

  {/* Text + Form Section */}
  <Box className={classes.contentWrapper}>
    <h1 className={classes.h1}>Adventures of the Mind</h1>
    <p className={classes.p}>
      Join hundreds of curious minds following my work. You'll be the first to read new essays and stories as they're released.
    </p>
    <form className={classes.form} onSubmit={submitHandler}>
      <input className={classes.input} ref={emailInputRef} placeholder="your email" />
      <button className={classes.button}>Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  </Box>
</Flex>
  )
}

export default NewsletterSubscribe

// import { useRef, useState } from 'react'
// import { Flex, Box, Image, chakra } from '@chakra-ui/react'

// import classes from './newsletter_subscribe.module.css'

// const NewsletterSubscribe = () => {


//     const emailInputRef = useRef()

//     const [message, setMessage] = useState('')
   
   
   
//        const submitHandler = async (event) => {
//            event.preventDefault()
           

//            const res = await fetch('/api/subscribe', {
//                method: 'POST',
//                body: JSON.stringify({ email: emailInputRef.current.value }),
//                headers: {'Content-Type' : 'application/json'}
//        })
    
   
//        const {error} = await res.json()

//        console.log(error)
   
//        if (error) {
//            setMessage(error)
//            return
//        }
   
//        emailInputRef.current.value = ''
//        setMessage('Success! You are now subscribed to the newsletter!')
   
//        }

//     return (
//         <Flex className={classes.letter_signup} flexDirection="column" width="100%" height="280px"> 
//             <div className={classes.container}>
//                     <h1 className={classes.h1}> Adventures of the Mind </h1>
//                     <h2 className={classes.h2}> </h2>
//                     <p className={classes.p}> Join the hundereds of other curious minds following my work. You'll be the first to read new essays and stories as they're released. </p>
                
                    
//                     <form className={classes.form} onSubmit={submitHandler}>
//                         <input className={classes.input} ref={emailInputRef} placeholder='your email' />
//                         <button className={classes.button}> Subscribe </button>
//                         {message && <p>{message}</p>}
//                     </form>
//             </div>
//         </Flex>
//     )

// }

// export default NewsletterSubscribe