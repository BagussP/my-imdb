if(!self.define){let e,s={};const a=(a,r)=>(a=new URL(a+".js",r).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const t=e=>a(e,n),o={module:{uri:n},exports:c,require:t};s[n]=Promise.all(r.map((e=>o[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"892a35fa4104c6f831e101cc4cde270e"},{url:"/_next/static/QrCUJ1l6-RcyGJU9Tmrdk/_buildManifest.js",revision:"02b926c0e0d93f81521380ea4167e5c8"},{url:"/_next/static/QrCUJ1l6-RcyGJU9Tmrdk/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/201-1d51a5097a0d8b96.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/698-80e9ba4f3e0a30ab.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/app/genre/%5Bgenre%5D/page-ec7e36787396a16a.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/app/layout-ca5014352fb2c892.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/app/movie/%5Bslug%5D/page-734e1bf9e563e54d.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/app/page-7403d616252b8a1a.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/bce60fc1-435f594454b2adeb.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/main-9b4a17c613c6ff40.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/main-app-9cbc24c34dcf1c68.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/pages/_app-b75b9482ff6ea491.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/pages/_error-7fafba9435aeb6bc.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-e8d73a62d62c2912.js",revision:"QrCUJ1l6-RcyGJU9Tmrdk"},{url:"/_next/static/css/393648237aa933b1.css",revision:"393648237aa933b1"},{url:"/icon-192x192.png",revision:"42de2af5fc083e9f828482ad3c57793d"},{url:"/icon-256x256.png",revision:"1ebed12c496bee4f7f08c7afd2d56062"},{url:"/icon-384x384.png",revision:"5ed8fef129fe506c1e87df8d07764aeb"},{url:"/icon-512x512.png",revision:"22600a480994eebd042e38502fee65d1"},{url:"/icons/icon-72x72.png",revision:"ca24079b52da7ad0730bf77ca3f70b7e"},{url:"/logo.png",revision:"ca24079b52da7ad0730bf77ca3f70b7e"},{url:"/manifest.webmanifest",revision:"0c5c95c21e917c0318d1107e9ff2933a"},{url:"/posterNarrow/1917.jpg",revision:"47d3f05fff0826ba2a72882fd81bfd87"},{url:"/posterNarrow/A-Star-Is-Born.jpg",revision:"ac51abb54237e11b05eeeb510c3e2aa1"},{url:"/posterNarrow/Black-Panther.jpg",revision:"6a2a1340b235ca31684fca6c7b6f5c49"},{url:"/posterNarrow/Infinity-War.jpg",revision:"8dd55bf44fa1c93f878af185c4358668"},{url:"/posterNarrow/Into-the-Spider-Verse.jpg",revision:"b944e5ebc4ae7a39807df8d61919ad99"},{url:"/posterNarrow/Joker.jpg",revision:"aff7fd85629604c91aa91990216694ef"},{url:"/posterNarrow/Knives-Out.jpg",revision:"4716e14aa726ad2ab9e2c66b88f22a23"},{url:"/posterNarrow/Mission-Impossible.jpg",revision:"5684bc86c5bcd9f0cd6b37cd0b63efec"},{url:"/posterNarrow/Once-Upon-a-Time-in-Hollywood.jpg",revision:"3580cb344d324d29b4f45679a19fe240"},{url:"/posterNarrow/Parasite.jpg",revision:"4c49adc414329ae6546baaca07c42827"},{url:"/posterWide/1917.jpg",revision:"18234105868557120e2ffd00fc4a5757"},{url:"/posterWide/A-Star-Is-Born.jpg",revision:"d16e603f3ff77b91a5e95f4a692be3ad"},{url:"/posterWide/Black-Panther.jpg",revision:"6b2f92d0a5d8d509d9fe8f31c014d761"},{url:"/posterWide/Infinity-War.jpg",revision:"c9db7431ad91662836186b0b01dc6230"},{url:"/posterWide/Into-The-Spider-Verse.jpg",revision:"25c8416c51b3baddf8663fd3aa72986f"},{url:"/posterWide/Joker.jpg",revision:"81afc99a1633b23730bf8dbb9e3bc3cb"},{url:"/posterWide/Knives-Out.jpg",revision:"805fc526138f45e8afed60e6ff46c9ca"},{url:"/posterWide/Mission-Impossible.jpg",revision:"d2656925497c8dde4ebb8acba206d6a2"},{url:"/posterWide/Once-Upon-a-Time-in-Hollywood.jpg",revision:"b6e809ce29ab5f5f44423331e53db13a"},{url:"/posterWide/Parasite.jpg",revision:"80e4c48fe0dc91bde45ba1e87258582a"},{url:"/star.webp",revision:"df9a7b8263e8c64f45d12f325ba0f3f0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
