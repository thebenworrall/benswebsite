import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import classes from './blog_posts.module.css';
import Link from 'next/link';
import Image from 'next/image';
import formatTagId from '../pages/utils/format_tag_id'

const BlogPosts = ({ posts, filter }) => {
    const postMatchesFilter = (post) => {
        const titleMatch = post.title.toLowerCase().includes(filter.toLowerCase());
        const tagsMatch = Array.isArray(post.tags) && post.tags.every(tag => 
            tag.sys && typeof tag.sys.id === 'string' && tag.sys.id.toLowerCase().includes(filter.toLowerCase())
        );
        return titleMatch || tagsMatch;
    };

    // Ensure posts is an array to avoid `.filter` errors
    const filteredPosts = Array.isArray(posts) ? posts.filter(postMatchesFilter) : [];

    const Posts = filteredPosts.map((post) => {
        const imageUrl = post.mainImage.startsWith('//') ? 'https:' + post.mainImage : post.mainImage;

        return (
            <div key={post.id} className={classes.post_container}>
                <Link href={`/newsletter/${post.id}`} passHref>
                    <a>
                        <div className={classes.imageWrapper}>
                            <Image
                                src={imageUrl}
                                alt={post.title}
                                width={320}
                                height={192}
                                layout='responsive'
                                className={classes.image}
                            />
                        </div>
                        <div className={classes.tagContainer}>
                            {post.tags && post.tags.map(tag => (
                                <span key={tag.sys.id} className={classes.tag}>{formatTagId(tag.sys.id)}</span>
                            ))}
                        </div>
                        <h1 className={classes.title}>{post.title}</h1>
                    </a>
                </Link>
            </div>
        );
    });

    return (
        <div className={classes.container}>
            {Posts.reverse()}
        </div>
    );
}

export default BlogPosts;



//RECENT OLD CODE 
// import React from 'react';
// import { Flex, Box } from '@chakra-ui/react';
// import classes from './blog_posts.module.css';
// import Link from 'next/link';
// import Image from 'next/image';
// import formatTagId from '../pages/utils/format_tag_id'

// const BlogPosts = ({ posts, filter }) => {
//     const postMatchesFilter = (post) => {
//         const titleMatch = post.title.toLowerCase().includes(filter.toLowerCase());
//         const tagsMatch = Array.isArray(post.tags) && post.tags.some(tag => 
//             tag.sys && typeof tag.sys.id === 'string' && tag.sys.id.toLowerCase().includes(filter.toLowerCase())
//         );
//         return titleMatch || tagsMatch;
//     };

//     const filteredPosts = posts.filter(postMatchesFilter);

//     const Posts = filteredPosts.map((post) => {
//         const imageUrl = post.mainImage.startsWith('//') ? 'https:' + post.mainImage : post.mainImage;


//         console.log(post.tags)

//         return (
//             <div key={post.id} className={classes.post_container}>
//                 <Link href={`/newsletter/${post.id}`} passHref>
//                     <a>
//                         <div className={classes.imageWrapper}>
//                             <Image
//                                 src={imageUrl}
//                                 alt={post.title}
//                                 width={320}
//                                 height={192}
//                                 layout='responsive'
//                                 className={classes.image}
//                             />
//                         </div>
//                         <div className={classes.tagContainer}>
//                             {post.tags.map(tag => (
//                                 <span key={tag.sys.id} className={classes.tag}>{formatTagId(tag.sys.id)}</span>
//                             ))}
//                         </div>
//                         <h1 className={classes.title}>{post.title}</h1>
//                     </a>
//                 </Link>
//             </div>
//         );
//     });

//     return (
//         <div className={classes.container}>
//             {Posts.reverse()}
//         </div>
//     );
// }

// export default BlogPosts;





























//OLD CODE 


// const BlogPosts = (props) => {
//     const Posts = props.posts.map((post) => {
//         // Ensure the URL includes the http: or https: prefix
//         const imageUrl = post.mainImage.startsWith('//') ? 'https:' + post.mainImage : post.mainImage;

//         return (
//             <div key={post.id} className={classes.post_container}>
//                 <Link href={`/newsletter/${post.id}`} passHref>
//                     <a>
//                     <div className={classes.imageWrapper}>
//     <Image
//         src={imageUrl}
//         alt={post.title}
//         width={320}  // These should match the CSS width
//         height={192} // and the CSS height
//         layout='responsive'
//         className={classes.image} // This can be optional if not using for other purposes
//     />
// </div>
//                     </a>
//                 </Link>
//                 <Link href={`/newsletter/${post.id}`}>
//                     <a><h1 className={classes.title}>{post.title}</h1></a>
//                 </Link>
//             </div>
//         );
//     });

//     return (
//         <div className={classes.container}>
//             {Posts.reverse()}
//         </div>
//     );
// }

// export default BlogPosts;











// import React, { useContext } from 'react'
// import { Flex, Box, Image} from '@chakra-ui/react'
// import classes from './blog_posts.module.css'
// import  Link  from 'next/link'




// const BlogPosts = (props) => {

//     const Posts =  props.posts.map((post) => {

//         const link = '/newsletter/' + post.id

//         return (
//                 <div key={post.id} className={classes.post_container}>
//                     <a href={'/newsletter/' + post.id}><Image className={classes.image} src={post.mainImage}/></a>
//                     <Link href={'/newsletter/' + post.id}><h1 className={classes.title}>{post.title}</h1></Link>
//                 </div>
//         )
//     })


//     return (
//         <div className={classes.container}>
//         {Posts.reverse()}
//         </div>
//     )


// }

// export default BlogPosts