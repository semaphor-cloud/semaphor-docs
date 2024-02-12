import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Logo from './logo';

const config: DocsThemeConfig = {
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
};

export default config;
