
export default {
  basePath: 'https://patriickdoyle.github.io/dev',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
