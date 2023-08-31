import React, { useContext } from 'react'
import { Flex, Box, Image, chakra} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import classes from './recent_posts.module.css'
import Link from 'next/link'



const RecentPosts = (props) => {

    console.log(props.posts[0].date)


    const recentPosts = props.posts.slice(-4)

    const Posts =  recentPosts.map((post) => {

        const link = '/newsletter/' + post.id

        return (
            
                <div className={classes.post_container}>
                        <a href={'/newsletter/' + post.id}><Image className={classes.image} src={post.mainImage}/></a>
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