// import '../styles/globals.css'
import '../Components/HomePage/Styles.scss'

//import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
