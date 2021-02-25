/**
 * * _app.tsx contains all the structure that belongs to the entire site, like a header or a footer
 * * The global css belongs to the entire page, so that is why it's here.
 */

import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    // If a context depends of another it goes inside the parent that it depends
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
