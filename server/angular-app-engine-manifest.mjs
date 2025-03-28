
export default {
  basePath: 'https://patriickdoyle.github.io/dev/omega-corp-frontend',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
