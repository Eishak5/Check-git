import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp, faArrowDown, faArrowLeft, faArrowRight);

export { FontAwesomeIcon };

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

