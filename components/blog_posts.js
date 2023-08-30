import React, { useContext } from 'react'
import { Flex, Box, Image, chakra} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import classes from './blog_posts.module.css'
import  Link  from 'next/link'



const BlogPosts = (props) => {

    const Posts =  props.posts.map((post) => {

        const link = '/newsletter/' + post.id

        return (

            <div>
                <div className={classes.post_container}>
                    <a href={'/newsletter/' + post.id}><Image className={classes.image} src={post.mainImage}/></a>
                    <Link href={'/newsletter/' + post.id}><h1 className={classes.title}>{post.title}</h1></Link>
                </div>
            </div>

                // <Card className={classes.container}>
                //     <CardBody className={classes.card_body}>
                //         <Image className={classes.image} src={post.mainImage} />
                //         <h1 className={classes.title}>{post.title}</h1>
                //         {/* {post.teaser} */}
                //         </CardBody>
                //     <CardFooter>  <Link className={classes.links} href={'/newsletter/' + post.id}> Read Now </Link> </CardFooter>
                // </Card>
        )
    })


    return (
        <Flex className={classes.container}>
        {Posts.reverse()}
        </Flex>
    )


}

export default BlogPosts