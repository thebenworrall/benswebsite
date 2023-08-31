import React, { useContext } from 'react'
import { Flex, Box, Image, chakra} from '@chakra-ui/react'
import classes from './blog_posts.module.css'
import  Link  from 'next/link'



const BlogPosts = (props) => {

    const Posts =  props.posts.map((post) => {

        const link = '/newsletter/' + post.id

        return (
                <div className={classes.post_container}>
                    <a href={'/newsletter/' + post.id}><Image className={classes.image} src={post.mainImage}/></a>
                    <Link href={'/newsletter/' + post.id}><h1 className={classes.title}>{post.title}</h1></Link>
                </div>
        )
    })


    return (
        <div className={classes.container}>
        {Posts.reverse()}
        </div>
    )


}

export default BlogPosts