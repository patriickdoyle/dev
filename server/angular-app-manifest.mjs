
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://patriickdoyle.github.io/dev/omega-corp-frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://patriickdoyle.github.io/dev/omega-corp-frontend"
  },
  {
    "renderMode": 2,
    "route": "/https://patriickdoyle.github.io/dev/omega-corp-frontend/contact-us"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 569, hash: '6b8124c42f9ba564f00c6ade9ab13a5cd57c66292d52bd19b25f1523a88dbe15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1082, hash: '0afeed40080b918be62c6c1b0a2b95bde7b2bd41096aa44a6ca93ef99f6a4b6b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2926, hash: '5b8a17a62e0ff160d0481c9191df60e6315897c7773d008ced76fc4274dba6e9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 2926, hash: '5b8a17a62e0ff160d0481c9191df60e6315897c7773d008ced76fc4274dba6e9', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
