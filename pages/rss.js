
import { Feed } from "feed";
import getPosts from "./api/getPosts"

const generateRssFeed = async (posts) => {
  const feed = new Feed({
    title: "My Website's RSS Feed",
    description: "Stay up to date with my latest content",
    id: "http://localhost:3000",
    link: "http://localhost:3000",
    language: "en",
    image: "http://localhost:3000/logo.png",
    favicon: "http://localhost:3000/favicon.png",
    author: {
      name: "John Doe",
      email: "john@example.com",
      link: "http://localhost:3000/about",
    },
  });

  posts.forEach((post) => {

    const postUrl = `http://localhost:3000/newsletter/${post.id}`

    feed.addItem({
      title: post.title,
      id: post.id,
      link: postUrl,
      description: post.teaser,
      date: new Date(post.date),
    });
  });

  return feed.rss2();
};

const Rss = () => {};

export async function getServerSideProps({ res }) {

  const { getBlogPosts } = getPosts();
  const posts = await getBlogPosts();

  


  const rss = await generateRssFeed(posts);

  console.log(posts)

  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return { props: {posts} };
}

export default Rss;






// import fs from 'fs'
// import RSS from 'rss'


// export default async function generateRssFeed(allPosts) {
//   const site_url =
//     process.env.NODE_ENV === "production"
//       ? "https://benworrall.com"
//       : "http://localhost:3000";

//   const feedOptions = {
//     title: "Blog posts | RSS Feed",
//     description: "Welcome to this blog posts!",
//     site_url: site_url,
//     feed_url: `${site_url}/rss.xml`,
//     image_url: `${site_url}/logo.jpeg`,
//     pubDate: new Date(),
//     copyright: `All rights reserved ${new Date().getFullYear()}`,
//   };

//   const feed = new RSS(feedOptions);

//   // Add each individual post to the feed.
//   allPosts.map((post) => {
//     feed.item({
//       title: post.title,
//       description: post.excerpt,
//       url: `${site_url}/posts/${post.slug}`,
//       date: post.date,
//     });
//   });

//   // Write the RSS feed to a file as XML.
//   fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
// }




// const generateRSSFeed = (posts) => {
//   const feed = new Feed({
//     title: 'Ben Newsletter RSS Feed',
//     description: 'The latest newsletter posts from your newsletter.',
//     link: 'https://localhost:3000', // Replace with your website URL
//   });

//   posts.forEach((post) => {
//     feed.addItem({
//       title: post.title,
//       description: post.description,
//       date: new Date(post.date),
//       link: `https://localhost:3000/newsletter/${post.id}`, // Replace with your URL structure
//     });
//   });

//   return feed.rss2();
// };

// const NewsletterRSS = () => {
//   return null;
// };

// export const getServerSideProps = async (context) => {


//   const { getBlogPosts } = getPosts();
//   const posts = await getBlogPosts();


//   const rssFeed = generateRSSFeed(posts);

//   context.res.setHeader('Content-Type', 'application/xml');
//   context.res.write(rssFeed);
//   context.res.end();

//   return {
//     props: {},
//   };
// };

// export default NewsletterRSS;