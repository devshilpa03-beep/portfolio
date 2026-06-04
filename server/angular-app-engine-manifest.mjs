
export default {
  basePath: 'https://devshilpa03-beep.github.io/portfolio',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
