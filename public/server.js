if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>a(e,r),d={module:{uri:r},exports:c,require:t};s[r]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-ECmKFXH0nZZMYMXGCj4rm.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ECmKFXH0nZZMYMXGCj4rm/_buildManifest.js",revision:"5309d226afdc55cb0c9ac303162d1763"},{url:"/_next/static/ECmKFXH0nZZMYMXGCj4rm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/framework-63157d71ad419e09.js",revision:"63157d71ad419e09"},{url:"/_next/static/chunks/main-681eae7584ce6395.js",revision:"681eae7584ce6395"},{url:"/_next/static/chunks/pages/_app-05def7ed62dbd373.js",revision:"05def7ed62dbd373"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/_offline-2ebc5510c176f360.js",revision:"2ebc5510c176f360"},{url:"/_next/static/chunks/pages/index-a0c8031a0800344d.js",revision:"a0c8031a0800344d"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/0cb8c954a594eba9.css",revision:"0cb8c954a594eba9"},{url:"/_next/static/css/7296fbcd2d8bc3b5.css",revision:"7296fbcd2d8bc3b5"},{url:"/_next/static/media/0cf580864ae59341-s.woff2",revision:"9dc5c6da3314b5ad3e00ccbf3ef10513"},{url:"/_next/static/media/8bb90efd1b2442e0-s.woff2",revision:"87f09b862d14319724588218fc942688"},{url:"/_next/static/media/b3e13a4ac57b538e-s.woff2",revision:"06dcf6e4964584269071da60f523e129"},{url:"/_next/static/media/cb6f448281d0c282-s.woff2",revision:"af93dfb1312ecb3b98b31d2297739188"},{url:"/_next/static/media/f884d4ea94220255-s.p.woff2",revision:"764c83e6b726b9604b89b81974219735"},{url:"/_next/static/media/fb3d4f9492d39101-s.woff2",revision:"d4831dd83581f1d91182d0b53a70a3cd"},{url:"/_offline",revision:"ECmKFXH0nZZMYMXGCj4rm"},{url:"/assets/banner.png",revision:"ad7512a9fa1978f1ef5d3e1076cd2291"},{url:"/assets/github.png",revision:"1ff8926e98c31f13fa1d6eda7acc42e8"},{url:"/assets/install.png",revision:"9c9ccc32feb77388e8ec8b036d7ddc2f"},{url:"/assets/linkedin.png",revision:"ceec71c9f7e42419a8ed09aeec6ffcd4"},{url:"/assets/npm.png",revision:"4668b9ea45655a4d2f957f999dd41a92"},{url:"/audio/failed.m4a",revision:"a4490bb5aa40b913820e8be8d24bce7d"},{url:"/audio/success.m4a",revision:"5fa5e3b3b18812639b8ece5436f7a280"},{url:"/favicon.ico",revision:"ec91ce048a179c3f797894b6b71735bc"},{url:"/favicon/android-chrome-192x192.png",revision:"17012e742fb25eeb5a5c264257edbf82"},{url:"/favicon/android-chrome-512x512.png",revision:"aff60777e935d04d94c35d17787b7da4"},{url:"/favicon/apple-touch-icon.png",revision:"57738bf1850696c534e54f53f7d797a7"},{url:"/favicon/favicon-16x16.png",revision:"bfc67f7c5405c7aa541c7faaa7d19f98"},{url:"/favicon/favicon-32x32.png",revision:"0d5d1a18109bb01d5e88ee7cdf80dc3b"},{url:"/images/application128.png",revision:"84c9204ccf27a6266b1ef541170286b2"},{url:"/images/application256.png",revision:"d8b016a6d7f285cfdf61654201826aa9"},{url:"/images/application512.png",revision:"ea2ecb358b7905908950674a76d43130"},{url:"/manifest.json",revision:"6c419944ba2ed9111dd0933f298665da"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
