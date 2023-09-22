import Head from 'next/head'

import HeroBanner from '../components/hero_banner'
import AboutMe from '../components/about_me'
import Newsletter from '../components/newsletter_box'

import getPosts from './api/getPosts'

import classes from './index.module.css'

const HomePage = (props) => {

    console.log(props.posts)

    return (
        <>
    <Head>
    <title> Ben Worrall | Learning About Life, Sharing What I discover.   </title>
    <meta name="description" content="Philosophical insights on self-development, psychology, and creativity." />
        <link rel="preload" href="/public/images/ben_photography.jpg" as="image" />
    </Head>
    <div className ={classes.container}>
        <HeroBanner />
        <AboutMe />
        <Newsletter posts={props.posts} /> 
    </div>
    </>
    )
}

export async function getStaticProps() {

    
   
    const { getBlogPosts } = getPosts();
    const blogPosts = await getBlogPosts();


    return {
        props: { posts: blogPosts }
    }
}


export default HomePage