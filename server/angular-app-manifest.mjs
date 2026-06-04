
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://devshilpa03-beep.github.io/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OE2FBEHI.js"
    ],
    "route": "/portfolio/blog"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio",
    "route": "/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17519, hash: 'b73d1883728097ac4788056d4c8050acc28ff069727c7e376ecef00ce2664c00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12405, hash: '26b832df68b3d88834ff9a7f5c7dbb5037935406355686c8e14cee28eba98ec7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 40920, hash: '2e134f9e66d5e37050c577d50da99d2116303bd6a90729abdf5903639f488863', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 80471, hash: '8c56e870e707b2ff49a7314cc6b7dc7fc133dca531b6df4f0beb269830ce11d3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IKAEKE7A.css': {size: 245798, hash: 'dNGKBkpvM5I', text: () => import('./assets-chunks/styles-IKAEKE7A_css.mjs').then(m => m.default)}
  },
};
