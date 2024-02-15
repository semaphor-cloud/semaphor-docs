import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Logo from './logo';

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Semaphor" />
      <meta
        property="og:description"
        content="Infuse data signals into your apps"
      />
    </>
  ),
  logo: (
    <span>
      <Logo />
    </span>
  ),
  project: {
    link: 'https://github.com/semaphor-cloud/semaphor-docs',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '© 2024 Semaphor. All rights reserved.',
  },
  feedback: {
    useLink: () =>
      'https://github.com/semaphor-cloud/semaphor-docs/issues/new?title=Feedback%20for%20%E2%80%9CSemaphor%E2%80%9D&labels=feedback',
  },
  editLink: {
    component: null,
  },
};

export default config;
