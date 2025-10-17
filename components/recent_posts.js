
import React, { useContext } from 'react'
import { Flex, Box, Image, chakra} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import classes from './recent_posts.module.css'
import Link from 'next/link'



const RecentPosts = (props) => {


    const recentPosts = props.posts.slice(-4)

    const Posts =  recentPosts.map((post) => {

        const link = '/newsletter/' + post.id

        return (
            
                <div key={post.id}  className={classes.post_container}>
                        <Link href={'/newsletter/' + post.id}><Image className={classes.image} src={post.mainImage}/></Link>
                        <Link href={'/newsletter/' + post.id}><h1 className={classes.title}>{post.title}</h1></Link>
                </div>
                
            
        )
    })


    return (
        <div>
        <Flex className={classes.container}>
        {Posts.reverse()}
        </Flex>
        <Link href={'/newsletter'}><p className={classes.see_more}> See more </p></Link>
        </div>
    )


}

export default RecentPosts