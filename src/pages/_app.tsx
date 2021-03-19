/**
 * * _app.tsx contains all the structure that belongs to the entire site, like a header or a footer
 * * The global css belongs to the entire page, so that is why it's here.
 */
import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    // If a context depends of another it goes inside the parent that it depends

    <Component {...pageProps} />
  );
};

export default MyApp;
