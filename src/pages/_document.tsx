import { GA_TRACKING_ID, GTAG_SCRIPT } from '@utils/gtag';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const URL = 'https://snel.dev';
const TITLE = 'snel.dev';
const DESCRIPTION = ''; // TODO
const IMAGE = ''; // TODO
const IMAGE_WIDTH = '1200'; // TODO
const IMAGE_HEIGHT = '630'; // TODO

const structuredData = {
  '@context': 'http://www.schema.org',
  '@type': 'WebSite',
  name: TITLE,
  url: URL
};

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='nl'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{ __html: GTAG_SCRIPT }} />
          <title>{TITLE}</title>
          <meta name='robots' content='index, follow' />
          <meta name='description' content={DESCRIPTION} />
          <link rel='canonical' href={`${URL}/`} />
          <link rel='preconnect' href='https://www.google-analytics.com' crossOrigin='' />
          <link rel='preconnect' href='https://www.googletagmanager.com' crossOrigin='' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={URL} />
          <meta property='og:title' content={TITLE} />
          <meta property='og:image' content={IMAGE} />
          <meta property='og:image:width' content={IMAGE_WIDTH} />
          <meta property='og:image:height' content={IMAGE_HEIGHT} />
          <meta property='og:description' content={DESCRIPTION} />
          <meta property='og:site_name' content={TITLE} />
          <meta property='og:locale' content='nl_NL' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content={URL} />
          <meta name='twitter:title' content={TITLE} />
          <meta name='twitter:description' content={DESCRIPTION} />
          <meta name='twitter:image' content={IMAGE} />
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
