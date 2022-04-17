import Footer from '../components/footer'
import Navbar11 from '../components/Navbar11'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar11 />
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
