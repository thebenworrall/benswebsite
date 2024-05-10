
import React, { useState } from 'react';
import Head from 'next/head';
import classes from './index.module.css'
import { Flex } from '@chakra-ui/react'
import NewsletterSubscribe from '../../components/newsletter_subscribe';
import BlogPosts from '../../components/blog_posts';
import PostsFilter from '../../components/posts_filter';
import getPosts from '../../pages/api/getPosts'


const NewsletterPage = ({ posts }) => {
    const [filter, setFilter] = useState('');

    return (
        <>
            <Head> 
                <title>Ben's Newsletter Archive</title>
                <meta name="description" content="The complete library of Ben's philosophical articles. Insights on self-development, psychology, creativity, art, and more." />
            </Head>
            <Flex className={classes.container} flexDirection="column">
            <NewsletterSubscribe />
                <PostsFilter onSearchChange={setFilter} />
                <Flex className={classes.posts_container}> 
                    <BlogPosts posts={posts} filter={filter} />
                </Flex>
            </Flex>
        </>
    );
}

export async function getStaticProps() {
    const { getBlogPosts } = getPosts();
    const blogPosts = await getBlogPosts();

    return { props: { posts: blogPosts } }
}

export default NewsletterPage;





// const NewsletterPage = (props) => {


//     return (
//         <>
//         <Head> 
//             <title> Ben's Newsletter Archive</title>
//             <meta name="description" content="The complete library of Ben's philosophical articles.
//              Insights on self-development, psychology, creativity, art, and more. " />
//         </Head>
//             <Flex className={classes.container} flexDirection="column">
//                 <NewsletterSubscribe />
//                 {/* <PostsFilter /> */} 
//                 <Flex className={classes.posts_container}> 
//                 <BlogPosts posts={props.posts} />
//                 </Flex>
//             </Flex>
//             </>
//         )
    
// }


// export async function getStaticProps() {
   
//     const { getBlogPosts } = getPosts();
//     const blogPosts = await getBlogPosts();

//     return {
//         props: { posts: blogPosts }
//     }

// }

// export default NewsletterPage