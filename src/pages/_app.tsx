/**
 * * _app.tsx contains all the structure that belongs to the entire site, like a header or a footer
 * * The global css belongs to the entire page, so that is why it's here.
 */

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
