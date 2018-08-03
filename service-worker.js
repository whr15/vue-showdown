/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1e4faa48ed527a05737dd7a0459b02e6"
  },
  {
    "url": "assets/css/0.styles.3b5116ee.css",
    "revision": "c683f28b6b5690b1b7a5059edb61a159"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.be502ee6.js",
    "revision": "e6fac43cf90a62342f088e07a795069f"
  },
  {
    "url": "assets/js/2.7c955436.js",
    "revision": "e4d4c2211e6cd8f49b3e19f87485a3d2"
  },
  {
    "url": "assets/js/3.77a31faf.js",
    "revision": "8adb9ca7719bceb1688370f9c92e973f"
  },
  {
    "url": "assets/js/4.515a527b.js",
    "revision": "483333701f188a9a463674f35f1f415b"
  },
  {
    "url": "assets/js/5.cc585084.js",
    "revision": "076c54579c5033c40567cefc50cb3c5c"
  },
  {
    "url": "assets/js/6.aad2e387.js",
    "revision": "01a1648fd568da88f69007cb4ef436a1"
  },
  {
    "url": "assets/js/7.4fc22bc6.js",
    "revision": "49b34fbc08c7a665f1a965d2eebaadfd"
  },
  {
    "url": "assets/js/app.88485ad7.js",
    "revision": "3e33b307fb308c2481023689a6596a9b"
  },
  {
    "url": "guide/index.html",
    "revision": "e1990244155b1e80fdf64e82ee7c2698"
  },
  {
    "url": "index.html",
    "revision": "b0802597c82acbc89ff5435dbe3a79cd"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "playground/index.html",
    "revision": "5dadddf683e75bc78d60dbe1797cfead"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "3757e728841c2429b3e2ae208f2cda98"
  },
  {
    "url": "zh/index.html",
    "revision": "6fb722faac9d1a52d9a515d813d27c80"
  },
  {
    "url": "zh/playground/index.html",
    "revision": "483608fbe2c637a0e4fa3e43231baa1f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
