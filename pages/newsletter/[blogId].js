import { Flex, Box, Heading, Image, chakra, } from '@chakra-ui/react'
import { List, ListItem, ListIcon, OrderedList, UnorderedList} from '@chakra-ui/react'
import SocialShare from '../../components/social_share'
import { FacebookMessengerShareButton, FacebookMessengerIcon, RedditShareButton, RedditIcon, TwitterShareButton, XIcon, FacebookShareButton, LinkedinShareButton, FacebookIcon, LinkedinIcon } from 'react-share'
import { useRouter } from 'next/router'
import getPosts from '../api/getPosts'
import findRelatedPosts from '../../utils/find_related_posts'
import formatTagId from '../../utils/format_tag_id'
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
  const [relatedPosts, setRelatedPosts] = useState([])



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
      // setContentComponents(documentToReactComponents(currentPost.content, options));
  

      const related = findRelatedPosts(currentPost.tags.map(tag => tag.sys.id), props.posts, currentPost.id);
      setRelatedPosts(related);
    }
  }, [currentPost.content]);


  //information for social share
  const shareUrl = `https://www.benworrall.com/newsletter/${currentPost.id}`;
  const title = currentPost.title;

  


  return (

    <>

      <Head>
        <title>{currentPost.title}</title>
        <meta name="description" content={currentPost.teaser} />
      </Head>

      
      <div className={classes.blogPageContent}>


        <Flex direction="column" className={classes.mainWrapper}>
          <div className={classes.main}>
            <h1 className={classes.title}>{currentPost.title}</h1>
            <div className={classes.tagContainer}>
              {currentPost.tags.map(tag => (
                <span key={tag.sys.id} className={classes.tag}>{formatTagId(tag.sys.id)}</span>
              ))}
            </div>
            <p className={classes.date}>Published by Ben Worrall on {currentPost.date}</p>
            <Flex className={classes.content}>
              <div className={classes.imageContainer}><Image className={classes.image}  src={currentPost.mainImage} alt={currentPost.title} /></div>
              <div className={classes.textContainer}><Box className={classes.main_text}>{contentComponents}</Box></div>
            </Flex>
            <SocialShare url={shareUrl} title={currentPost.title} />
          </div>

        </Flex>


        <div className={classes.sidebar}>
          <div className={classes.profileSection}>
            <Image src="/images/ben_main.jpg" alt="Ben Worrall"  className={classes.profileImage} />
            <h3 className={classes.profileHeader}>Who is Ben Worrall?</h3>
            <p className={classes.profileText}>I'm a philosophical writer and teacher from the UK. My focus is sharing insights on human development through educational content and captivating storytelling.</p>
            <a href="/#about-section" className={classes.profileButton}>Learn More</a>
          </div>

          <div className={classes.headingContainer}>
            <Heading textAlign="center" className={classes.headingWithLine}>Related Posts</Heading>
          </div>
          <UnorderedList>
            {relatedPosts.map(post => (
              <List className={classes.sidebar_list} key={post.id}>
                <Link href={`/newsletter/${post.id}`}>
                  <Flex align="center" flexDirection="column">
                    <a className={classes.newsletterLinks}>{post.title}</a>
                    <Image src={post.mainImage} alt={`Image for ${post.title}`} className={classes.sidebar_image} />
                  </Flex>
                </Link>
              </List>
            ))}
          </UnorderedList>
          {/* Space for ads or additional links */}
          {/* <Heading size="md" mt="20px" mb="10px">Featured Products</Heading>
          <p>Product links or ads could go here</p> */}
        </div>

      </div>
      <NewsletterSubscribe className={classes.newsletter_subscribe} />
    </>
  );


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


// NEW STATIC PATHS NEWS EXPERIMENTAL 

// export async function getStaticPaths() {
//   const { getBlogPosts } = getPosts();
//   const posts = await getBlogPosts();

//   const paths = posts.map((post) => ({
//     params: { blogId: post.id.toString() }
//   }));

//   return { paths, fallback: 'blocking' };
// }




export async function getStaticProps() {

  const { getBlogPosts } = getPosts();
  const blogPosts = await getBlogPosts();


  return {
    props: { posts: blogPosts },
    revalidate:3600,
  }
}



/// GET STATIC PROPS NEW EXPERIMENTAL 

// export async function getStaticProps({params}) {

//   const { getBlogPostById } = getPosts();
//   const post = await getBlogPostById(params.blogId);
//   console.log("fetehed post data", post); // Check what's being returned here


//   return {
//     props: { post },
//     revalidate:3600,
//   }
// }



export default BlogDetails