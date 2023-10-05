import { Flex, Box, Image, Heading, chakra, } from '@chakra-ui/react'
import { List, ListItem, ListIcon, OrderedList, UnorderedList,} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import getPosts from '../api/getPosts'
import NewsletterSubscribe from '../../components/newsletter_subscribe'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import classes from './blogId.module.css'



const BlogDetails = (props) => {

const router = useRouter()

const blogId = router.query.blogId


const isCurrentPost = (post) => {
    return post.id === blogId
}

const currentPost = props.posts.find(isCurrentPost)


const [contentComponents, setContentComponents] = useState(null);



useEffect(() => {
    if (currentPost.content) {
      const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { title, description, file } = node.data.target.fields;
            const assetType = file.contentType;
            const assetUrl = file.url;

            if (assetType.startsWith("image/")) {
              return <img src={assetUrl} alt={description} title={title} />;
            } else if (assetType.startsWith("video/")) {
              return (
                <video controls>
                  <source src={assetUrl} type={assetType} />
                  Your browser does not support the video tag.
                </video>
              );
            }

            return null; // Render nothing for other asset types
          },
          // [INLINES.HYPERLINK]: (node) => {
          //   const url = node.data.uri;
  
          //   if (url.includes("player.vimeo.com/video")) {
          //     return (
          //       <iframe title="Vimeo Video" src={url} frameBorder="0" allowFullScreen />
          //     );
          //   } else if (url.includes("youtube.com/embed")) {
          //     return (
          //       <iframe
          //         title="YouTube Video"
          //         src={url}
          //         width="700" 
          //         height="400" 
          //         allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          //         frameBorder="0"
          //         allowFullScreen
          //       />
          //     );
          //   }
          //   return <a href={url}>{children}</a>;
          // },
          [INLINES.HYPERLINK]: (node, children) => {
            const url = node.data.uri;
          
            // Check if the link is an internal link (starts with '/')
            if (url.startsWith('/')) {
              return (
                <Link href={url}>
                  <a>{children}</a>
                </Link>
              );
            } else if (url.includes("player.vimeo.com/video")) {
              return <iframe title="Vimeo Video" src={url} frameBorder="0" allowFullScreen />;
            } else if (url.includes("youtube.com/embed")) {
              return (
                <iframe
                  title="YouTube Video"
                  src={url}
                  width="700"
                  height="400"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                />
              );
            } else {
              return <a href={url}>{children}</a>;
            }
          },
          [BLOCKS.PARAGRAPH]: (node, children) => {
            const isQuote = node.content.some((contentNode) => {
              return (
                contentNode.nodeType === 'text' &&
                contentNode.value.trim().startsWith('>') 
              );
            });
      
            if (isQuote) {
              return <blockquote>{children}</blockquote>;
            } else {
              return <p>{children}</p>;
            }
          },

          [BLOCKS.UL_LIST]: (node, children) => (
            <UnorderedList>{children}</UnorderedList>
          ),
          [BLOCKS.OL_LIST]: (node, children) => (
            <OrderedList>{children}</OrderedList>
          ),
          [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,

          [BLOCKS.HEADING_1]: (node, children) => <Heading size="4x1" fontSize="45px">{children}</Heading>,
          [BLOCKS.HEADING_2]: (node, children) => <Heading size="3x1" fontSize="40px">{children}</Heading>,
          [BLOCKS.HEADING_3]: (node, children) => <Heading size="2x1" fontSize="35px">{children}</Heading>,
          [BLOCKS.HEADING_4]: (node, children) => <Heading size="x1" fontSize="26px">{children}</Heading>,
          [BLOCKS.HEADING_5]: (node, children) => <Heading size="lg" fontSize="24px">{children}</Heading>,
          [BLOCKS.HEADING_6]: (node, children) => <Heading size="md" fontSize="20px">{children}</Heading>,


        },
      };
  
      setContentComponents(documentToReactComponents(currentPost.content, options));
    }
  }, [currentPost.content]);




console.log(currentPost)





    return (
    <>
    <Head>
    <title> {currentPost.title} </title>
    <meta name="description" content={currentPost.teaser} />
    </Head>
      <div className={classes.blogPageContent}>
        <Flex className={classes.main}>
          <h1 className={classes.title}> {currentPost.title} </h1>
          <p className={classes.date}> Published by Ben Worrall on {currentPost.date} </p>
          <Flex className={classes.content}>
            <div className={classes.imageContainer}><Image className={classes.image} src={currentPost.mainImage} /></div>
            <div className={classes.textContainer}><Box className={classes.main_text}>{contentComponents}</Box></div>
          </Flex>
        </Flex>
        <div>
          <NewsletterSubscribe className={classes.newsletter_subscribe} />
        </div>
      </div>
    </>
  )

}

export async function getStaticPaths() {

    const { getBlogPosts } = getPosts();
    const blogPosts = await getBlogPosts();


return {
    fallback: false, 
    paths: blogPosts.map((blogpost) => ({
        params: { blogId: blogpost.id.toString() }
    }))
}
}

export async function getStaticProps() {

    const { getBlogPosts } = getPosts();
    const blogPosts = await getBlogPosts();


    return {
        props: { posts: blogPosts }
    }
}

export default BlogDetails