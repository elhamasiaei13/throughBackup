"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","2ffaefdbd70f91361f45134ff2d7a012"],["/static/css/main.802aed51.css","13cf296f4b68bb4ece8438392bc8868c"],["/static/js/main.caadccf9.js","7d086e3706a5c931ebc20fd613490181"],["/static/media/Vazir-Bold.718757b4.ttf","718757b43978dde0e2f10193866dbb19"],["/static/media/Vazir-Bold.74c25075.eot","74c2507543a9a462403247d0a93aff93"],["/static/media/Vazir-Bold.79564bfd.woff2","79564bfd53878bc6c65f6e50911ec76a"],["/static/media/Vazir-Bold.e4dcbd89.woff","e4dcbd89e8046e52ea639dcb770ec085"],["/static/media/Vazir-Light.0ec3d0c3.woff2","0ec3d0c33fdef16234f31a8ba06f95c6"],["/static/media/Vazir-Light.4c0ed308.woff","4c0ed30806e28732a70fc54f3099e9f5"],["/static/media/Vazir-Light.51c310dd.ttf","51c310dd35d9c486a5540df7dfe13fba"],["/static/media/Vazir-Light.89bd2765.eot","89bd27658bb7fe56f69b8b1c60b7e2bd"],["/static/media/Vazir-Medium.146524a4.woff","146524a4a9840deecc7788994c54562a"],["/static/media/Vazir-Medium.5a13241e.eot","5a13241ec8fb17d72a140a5fa361fd12"],["/static/media/Vazir-Medium.cb4ffe98.ttf","cb4ffe9829d3d86d6470c59ee16d8de7"],["/static/media/Vazir-Medium.dc428477.woff2","dc428477d3fd9321b1b3d7312b238c36"],["/static/media/Vazir-Thin.0fddc111.woff","0fddc11148121ec90ca00b73021f3df1"],["/static/media/Vazir-Thin.6a28296d.eot","6a28296d2c8b273123f775609bdebc04"],["/static/media/Vazir-Thin.86ec2a48.woff2","86ec2a48aee9136bed9d11f2a5258f31"],["/static/media/Vazir-Thin.eb39f181.ttf","eb39f181e789f2ebfbcd35690445dbaa"],["/static/media/Vazir.464e382e.eot","464e382e09616ab1d7b0b4d5c300fabe"],["/static/media/Vazir.84102100.ttf","8410210002244290031182f05c103a5b"],["/static/media/Vazir.8a42b078.woff","8a42b078e51ebe5ff71b495232a98a83"],["/static/media/Vazir.934e14db.woff2","934e14dbc77e89ef53643f9449f0107f"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/static/media/wYekan.6a6fd036.ttf","6a6fd036ad4a8e2883a427f942104bf9"],["/static/media/wYekan.8abcbf9b.eot","8abcbf9b0f5cf38ab7e1d13ee6266a1f"],["/static/media/wYekan.ee7d8189.woff","ee7d818972d4a92450292e22495e21de"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,i){var c=new URL(e);return i&&c.pathname.match(i)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),c=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var i=new Request(t,{credentials:"same-origin"});return fetch(i).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),i="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),a=urlsToCacheKeys.has(t));var c="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});