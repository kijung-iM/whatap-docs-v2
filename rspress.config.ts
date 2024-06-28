import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'WhaTap Docs',
  description: '와탭 기술 문서 :: WhaTap, 와탭 기술 문서 페이지에 오신 것을 진심으로 환영합니다.',
  icon: '/whatap-favicon.ico',
  logo: {
    light: '/whatap-docs-logo.svg',
    dark: '/whatap-docs-logo.svg',
  },
  lang: 'ko',
  locales: [
    {
      lang: 'ko',
      label: 'KOR',
      title: 'WhaTap Docs',
      description: '실시간 옵저버빌리티 플랫폼 | WhaTap Docs',
    },
    {
      lang: 'en',
      label: 'ENG',
      title: 'WhaTap Docs',
      description: 'Real-time Observability Platform | WhaTap Docs',
    },
    {
      lang: 'ja',
      label: 'JPN',
      title: 'WhaTap Docs',
      description: 'リアルタイム・オブザーバビリティ・プラットフォーム | WhaTap Docs',
    },
  ],
  head: [
    ['meta', { name: 'keywords', content: 'WhaTap, 와탭, 매뉴얼, 사용법, WhaTap 사용법, WhaTap 매뉴얼, 기술 문서, APM, 애플리케이션 모니터링, 로그 모니터링, 쿠버네티스 모니터링, 서버 모니터링, 데이터베이스 모니터링, URL 모니터링, 클라우드 모니터링, 브라우저 모니터링, Browser monitoring, Application Monitoring, Log Monitoring, Kubernetes Monitoring, Server Monitoring, Database Monitoring, URL Monitoring, Cloud Monitoring, Manual, User Guide, Docs, WhaTap Manual, WhaTap Docs, WhaTap Documents, 트랜잭션, Transaction, 트레이싱, Tracing, 마스터, Master, 노드, Node, 데드락, Deadlock, 락 트리, Lock tree, 멀티 트랜잭션, Multi Trancsaction, 메트릭스, Metrics, 소프트웨어 프록시, Software proxy, 스택, Stack, 슬로우 쿼리, Slow query, 액티브 트랜잭션, Active transaction, 컨테이너, Container, 히트맵, Hitmap, Garbage Collection, GC, MXQL, Method 추적, Trace method, OOM Killed 컨테이너, OOM Killed Container, Oracle, Tibero, PostgreSQL, MySQL, MongoDB, SQL Server, CUBRID, Altibase, Redis, WebLogic, WebSphere' }],
    ['meta', { name: 'naver-site-verification', content: '0c21fc5664a467108fb762ade47a3f81ee9b88ed'}],
    ['meta', { name: 'google-site-verification', content: 'rIlfJkbbogFOIDc3DgJZmOGbUMJWytyvZSKEgV7EMsE'}],
  ],
  markdown: {
    mdxRs: false,
    remarkPlugins: [],
    rehypePlugins: [],
    checkDeadLinks: true,
    showLineNumbers: true,
    defaultWrapCode: true,
    globalComponents: [
      path.join(__dirname, 'src/components/Status.tsx'),
      path.join(__dirname, 'src/components/InDoc.tsx'),
      path.join(__dirname, 'src/components/Mdxcomponents.tsx'),
    ],
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
