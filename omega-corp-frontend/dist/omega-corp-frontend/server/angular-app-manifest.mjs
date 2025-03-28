
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dev/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/dev"
  },
  {
    "renderMode": 2,
    "route": "/dev/contact-us"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 518, hash: 'f21fcc5ec2c82abc983c046554a76128a0bc3ec927d3db419a1b49b8b57a6b54', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: 'f0d8466d7570b02968ead36012693b670de22236fd8dd437f520292003a29ec1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 3805, hash: '4bfc6600a44cddfa7f3f681b3b4bf84dd2c1319ce39cd9f3042a4ae15fe0d67d', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5781, hash: '6cb84ee218c85f095d4a2bbd97d261a34fb28c276c1373e8f5b1f218f976027a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
