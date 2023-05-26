import Lay from '../components/layout/Lay'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider><Lay><Component {...pageProps} /></Lay></ChakraProvider>
}

export default MyApp
