import Head from 'next/head'
import Header from "./Header"
import Footer from "./Footer"




const Lay = (props) => {

    return (
       <div>
         <Head>
            <title>Ben Worrall</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Learning about Life" />
            {/* You can add more meta tags or links like favicon here */}
        </Head>
        <Header />
            <main>{props.children}</main>
        <Footer />
        </div>
    )

}

export default Lay