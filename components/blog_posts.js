import { Flex, Box, Image, chakra, Link } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import { useEffect, useState } from 'react'

import getPosts from '../pages/api/getPosts'

import classes from './blog_posts.module.css'






const DUMMY_POSTS = [
    {
        title: 'Blog Post One', 
        image: 'https://www.monsterinsights.com/wp-content/uploads/2020/01/what-is-the-best-time-to-post-a-blog-and-how-to-test-it.jpg', 
        description: ' This is the first blog post',
        link: 'none'
    }, 
    {
        title: 'Blog Post Two', 
        image: 'https://www.monsterinsights.com/wp-content/uploads/2020/01/what-is-the-best-time-to-post-a-blog-and-how-to-test-it.jpg', 
        description: ' This is the second blog post',
        link: 'none'
    },
    {
        title: 'Blog Post Three', 
        image: 'https://www.monsterinsights.com/wp-content/uploads/2020/01/what-is-the-best-time-to-post-a-blog-and-how-to-test-it.jpg', 
        description: ' This is the third blog post',
        link: '/'
    }

]

const BlogArray =  DUMMY_POSTS.map((post) => {
    return (
        
            <Card>
                <CardHeader className={classes.title}>{post.title}</CardHeader>
                <CardBody>
                    <Image src={post.image} />
                    {post.description}
                    </CardBody>
                <CardFooter>  <Link href={post.link}> Read Now </Link> </CardFooter>
            </Card>
    )
})

const BlogPosts = () => {


 const [blogPosts, setBlogPosts ] = useState([])

 const { getBlogPosts } = getPosts()


    useEffect(() => {

     getBlogPosts().then((response) => setBlogPosts(response))

    }, [])

    console.log(blogPosts)




    const Blog =  blogPosts.map((post) => {
        return (
            
                <Card>
                    <CardHeader className={classes.title}>{post.title}</CardHeader>
                    <CardBody>
                        <Image src={post.mainImage} />
                        {post.text}
                        </CardBody>
                    <CardFooter>  <Link href={post.link}> Read Now </Link> </CardFooter>
                </Card>
        )
    })

    return (
        <Flex>
        {Blog}
        </Flex>
    )


}

export default BlogPosts