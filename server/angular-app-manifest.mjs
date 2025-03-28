
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://patriickdoyle.github.io/dev/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://patriickdoyle.github.io/dev"
  },
  {
    "renderMode": 2,
    "route": "/https://patriickdoyle.github.io/dev/contact-us"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 549, hash: '48fcec8eb3ff182c8ed2bcfa814f18755a78699501a02b0d599b52f956d6815d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: '1f411bab8d51c24e1b8ba95c05ebbad5f47934cd35b76d24fd7c20c92a9a6cbf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2866, hash: 'c700e4d884afba62486e5af86d21e5ab97d756d7b479ec7957d9757bc3b59921', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 2866, hash: 'c700e4d884afba62486e5af86d21e5ab97d756d7b479ec7957d9757bc3b59921', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
