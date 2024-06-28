import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'WhaTap Docs',
  description: '와탭 기술 문서 :: WhaTap, 와탭 기술 문서 페이지에 오신 것을 진심으로 환영합니다.',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  locales: [
    // {
    //   lang: 'ko-KR',
    //   label: 'KOR',
    //   title: 'WhaTap Docs',
    //   description: '와탭 기술 문서 :: WhaTap, 와탭 기술 문서 페이지에 오신 것을 진심으로 환영합니다.',
    // },
    // {
    //   lang: 'en-US',
    //   label: 'English',
    //   title: 'WhaTap Docs',
    //   description: 'Real-time Observability Platform | WhaTap Docs',
    // },
    // {
    //   lang: 'ja-JP',
    //   label: 'JPN',
    //   title: 'WhaTap Docs',
    //   description: 'リアルタイム・オブザーバビリティ・プラットフォーム | WhaTap Docs',
    // },
  ],
  markdown: {
    mdxRs: false,
    remarkPlugins: [],
    rehypePlugins: [],
    checkDeadLinks: true,
    showLineNumbers: true,
    defaultWrapCode: true,
    globalComponents: [
      path.join(__dirname, 'src/components/Status.tsx')
    ],
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
