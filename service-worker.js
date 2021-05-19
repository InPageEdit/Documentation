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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "25d708eb39af59687bce339cae9c21d7"
  },
  {
    "url": "about/analysis.html",
    "revision": "efb51f16f929cfc4e0a314bd0f59e2bd"
  },
  {
    "url": "about/do-you-know.html",
    "revision": "81b11d17c005ae14dff4c8493091b1da"
  },
  {
    "url": "about/donate.html",
    "revision": "707dd0fed55cfb8a00e5ffb8b7c876dc"
  },
  {
    "url": "about/index.html",
    "revision": "12d12a460c431ff48cf320b4b770484d"
  },
  {
    "url": "about/logo.html",
    "revision": "ff5e4f1eec3132ea31f006f7cfff16bd"
  },
  {
    "url": "assets/css/0.styles.158d9640.css",
    "revision": "cb05e5e2fd0388a18cb44bb683e10d0f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d9735345.js",
    "revision": "43858ffbcde7fc0bf0db998201083524"
  },
  {
    "url": "assets/js/11.319465b8.js",
    "revision": "50577d939ffb7f60a6c76b2f145473df"
  },
  {
    "url": "assets/js/12.8a4878fa.js",
    "revision": "0a8fa820ecbd91eaa0656bf9589c31f8"
  },
  {
    "url": "assets/js/13.00f044a6.js",
    "revision": "98c67aea0a9bc7eee4d9ff34e750a4a3"
  },
  {
    "url": "assets/js/14.ff7e51c1.js",
    "revision": "aaf7f679f822e2b637122b93fd72a603"
  },
  {
    "url": "assets/js/15.39d278f1.js",
    "revision": "61ed59a661ad6e2f30aa0676333a0335"
  },
  {
    "url": "assets/js/16.4f192d0b.js",
    "revision": "72a5cbde026a7abf5ae5b701c8e6d0d9"
  },
  {
    "url": "assets/js/17.49a99d97.js",
    "revision": "b2945976cec87a5116e43b7078908996"
  },
  {
    "url": "assets/js/18.5786e6ff.js",
    "revision": "1c5dc6618c50b0cd12f776ca6face2db"
  },
  {
    "url": "assets/js/19.30590c6f.js",
    "revision": "580dfd191f7ded5369e26b6e31daf7eb"
  },
  {
    "url": "assets/js/2.e6313fce.js",
    "revision": "6c0a96b1e11988fdc984eb2d0fdbf04e"
  },
  {
    "url": "assets/js/20.b7da5583.js",
    "revision": "9454deda9ed55d93f8bb642d1fe8708d"
  },
  {
    "url": "assets/js/21.153a1cfd.js",
    "revision": "e611fbd22770be8a1fe115834c3add68"
  },
  {
    "url": "assets/js/22.fa747f10.js",
    "revision": "39ffadb749993303f39c86a16d6ddde0"
  },
  {
    "url": "assets/js/23.048130a3.js",
    "revision": "c32614bf62322b3eb6474d3f697bc9c7"
  },
  {
    "url": "assets/js/24.c43e38ee.js",
    "revision": "da51ac3a6117037d0b95824464f54d6e"
  },
  {
    "url": "assets/js/25.ea2eeefb.js",
    "revision": "2c9168a924f0e333cc8b58a3ba56c469"
  },
  {
    "url": "assets/js/26.695ce0fc.js",
    "revision": "5486d32e6d857c205df00ace798703bb"
  },
  {
    "url": "assets/js/27.eb212f4c.js",
    "revision": "ea58e1b3fc8884702eadfcae910c45c3"
  },
  {
    "url": "assets/js/28.1f8d7704.js",
    "revision": "e4e92fcccbf773e7cf5c180ee77ef4c0"
  },
  {
    "url": "assets/js/29.afc9c7af.js",
    "revision": "921dc442fe72e5cac2ec2fa1f8c2d315"
  },
  {
    "url": "assets/js/3.d305887f.js",
    "revision": "fc2c6282106d0bbd5c9aeadcb885f418"
  },
  {
    "url": "assets/js/30.a71e4a52.js",
    "revision": "d2b1481de8d9c96ae24d6ed3c584d5a4"
  },
  {
    "url": "assets/js/31.a1e0ade4.js",
    "revision": "89c64dde597f71fa60130beb1798cdf5"
  },
  {
    "url": "assets/js/32.d6fe6f1e.js",
    "revision": "67426b3239ba6ce3fbed2bc89cc4898e"
  },
  {
    "url": "assets/js/33.e7047f23.js",
    "revision": "52c18476499b1bd9966099b901e54cd9"
  },
  {
    "url": "assets/js/34.cfbe1c20.js",
    "revision": "40fc0c093a13ba2423eb2e4ea679ee8f"
  },
  {
    "url": "assets/js/35.4defe42b.js",
    "revision": "b065dd2c3f2d38b97f9be252e4a4789f"
  },
  {
    "url": "assets/js/36.dd7120a0.js",
    "revision": "5f2ba035bfd7e5b3aecfbc1cd8d6733b"
  },
  {
    "url": "assets/js/37.172ab499.js",
    "revision": "c76c482261cc6182ab2ff10c145a4fe3"
  },
  {
    "url": "assets/js/38.8d652ad0.js",
    "revision": "fff3dea2d8cd0908c96bcd322d0bcc6d"
  },
  {
    "url": "assets/js/39.e1a97d88.js",
    "revision": "642e5204e8cd40b1b2f8c2e32800c9df"
  },
  {
    "url": "assets/js/4.c80bebf0.js",
    "revision": "6adb27e38ad91f0fe0e895ba726532da"
  },
  {
    "url": "assets/js/40.9376b9ff.js",
    "revision": "e4f9273a24eb8e536eea036ac918e61f"
  },
  {
    "url": "assets/js/41.316a95e6.js",
    "revision": "7b21e5a093d80569b03e2d4ca0ee6a82"
  },
  {
    "url": "assets/js/42.3364694e.js",
    "revision": "7d7c5e8afa229cd93dfeae04be49dd32"
  },
  {
    "url": "assets/js/43.f5709261.js",
    "revision": "41d498bfaf120c1f10c04b2b39298d11"
  },
  {
    "url": "assets/js/44.79e4662e.js",
    "revision": "525dd4c167d5fa753d0e81e367ae27c0"
  },
  {
    "url": "assets/js/45.2783ba40.js",
    "revision": "7c3c6f8eccbd5ac2920745e016d203d6"
  },
  {
    "url": "assets/js/46.0981d0f0.js",
    "revision": "bf6a96fd1e0a0581c463a497b13088ad"
  },
  {
    "url": "assets/js/47.e36a7a88.js",
    "revision": "ad5986c9e62d79fe6933e885eaaf603a"
  },
  {
    "url": "assets/js/48.d357175b.js",
    "revision": "a9d0ca53b06ba9cd6599cc2ce47bb566"
  },
  {
    "url": "assets/js/49.59e410d9.js",
    "revision": "4d5afc2dcdcc22ed515ccef5c1e19e95"
  },
  {
    "url": "assets/js/5.3f4a2835.js",
    "revision": "b9669794a4cd871163112d8354942746"
  },
  {
    "url": "assets/js/50.ca742a04.js",
    "revision": "8b187a5087718fd0a4c408ae0ad4e7f2"
  },
  {
    "url": "assets/js/51.bdf40769.js",
    "revision": "e7ad207cb38b993ffd204feb2d522952"
  },
  {
    "url": "assets/js/52.4a57eb0e.js",
    "revision": "e7b50f9fe6df04bb499dfa15666e1ec6"
  },
  {
    "url": "assets/js/53.85acbdeb.js",
    "revision": "f70602c3269c5567cb61c7deb43c2f85"
  },
  {
    "url": "assets/js/54.3bf73f35.js",
    "revision": "e7c7a6407798d6b172ff162be57e1e1f"
  },
  {
    "url": "assets/js/55.e671b09c.js",
    "revision": "02b7283b8a019ad0c5a858b20c8cfa23"
  },
  {
    "url": "assets/js/56.de31b547.js",
    "revision": "7ef0e2014e037c337696ada857672060"
  },
  {
    "url": "assets/js/57.a7854a96.js",
    "revision": "52e9307c36eb8685351933708635ba07"
  },
  {
    "url": "assets/js/58.89c8dc75.js",
    "revision": "abd4ed7de0c60a92d199856307d95629"
  },
  {
    "url": "assets/js/59.1e948201.js",
    "revision": "2456418b134787ad808afee803521c7e"
  },
  {
    "url": "assets/js/6.4bd256ec.js",
    "revision": "0525dd7be7db6128daf6c1982a2c54e4"
  },
  {
    "url": "assets/js/60.30314bd2.js",
    "revision": "54b78d3e61d69d21be7142d00548d265"
  },
  {
    "url": "assets/js/61.ffedd304.js",
    "revision": "a4a305818b11f30b2b6298850a887cb3"
  },
  {
    "url": "assets/js/62.2f60e9ca.js",
    "revision": "8f668f129383e7182f2de9898fda78cc"
  },
  {
    "url": "assets/js/63.d9916b51.js",
    "revision": "fae93062a049ced0d3ab69d193500615"
  },
  {
    "url": "assets/js/64.0d65874b.js",
    "revision": "7b21f5c4f66ce83ffb02268e5be96274"
  },
  {
    "url": "assets/js/65.e04e489b.js",
    "revision": "8a3ba1b7c34171ec2924fab764180d88"
  },
  {
    "url": "assets/js/66.3d955e7e.js",
    "revision": "30ecf21cc58fc0b0bc0c2903cbaae73f"
  },
  {
    "url": "assets/js/67.8f5b5c19.js",
    "revision": "965ae5c82f423d8d763f0725b9b14a86"
  },
  {
    "url": "assets/js/68.1756bf44.js",
    "revision": "c487bdb7affc573adc7da43bae5f5b6d"
  },
  {
    "url": "assets/js/69.18d4250d.js",
    "revision": "b8d567518f29a5f4e3421b22b180652f"
  },
  {
    "url": "assets/js/7.8fd3c3f1.js",
    "revision": "c9a985bd21b9a16c5dc2e3825ea8af24"
  },
  {
    "url": "assets/js/70.a389f4fd.js",
    "revision": "cc866f4f2c0de14057d68cb113fdb673"
  },
  {
    "url": "assets/js/71.c907a7cc.js",
    "revision": "09b349d3641dea3d36b4a88ec59b7909"
  },
  {
    "url": "assets/js/72.4233cfe9.js",
    "revision": "ecae22c6088940970598a48b0562c1c9"
  },
  {
    "url": "assets/js/73.295be7cf.js",
    "revision": "6ec6a1b32c8a9e3372349984d4bc262a"
  },
  {
    "url": "assets/js/8.580cfd64.js",
    "revision": "b10abd0377ed445e6b2882f0062f28c9"
  },
  {
    "url": "assets/js/9.79ef242d.js",
    "revision": "a037deb6a52c0be4897e0bcdab8b387a"
  },
  {
    "url": "assets/js/app.78f49b4d.js",
    "revision": "e394ebf2e6f0943ff5caa5e037a69bb1"
  },
  {
    "url": "develop/analysis/index.html",
    "revision": "a1590ba31f331a15cc6c4f8de916e4d9"
  },
  {
    "url": "develop/analysis/v2.html",
    "revision": "469a4990201d8a6bd447011463fa9343"
  },
  {
    "url": "develop/analysis/v3.html",
    "revision": "b7fc962f24efce8d1f55934ca06e2470"
  },
  {
    "url": "develop/analysis/v4.html",
    "revision": "42262da9129dd211ef9b2dbc308f5825"
  },
  {
    "url": "develop/api.html",
    "revision": "1e48055a547660c9596e26d3c1df6be6"
  },
  {
    "url": "develop/hook.html",
    "revision": "1f6bfab1f96f07292b8984302f588fde"
  },
  {
    "url": "develop/index.html",
    "revision": "1f22a4c106d74495ae5cc0cb9a1d64f0"
  },
  {
    "url": "develop/nouns.html",
    "revision": "c487d0e8d4b8215c41ed27f2f47b125d"
  },
  {
    "url": "develop/plugin.html",
    "revision": "6a0fcf0def7dcfa96256514a6d19a4e6"
  },
  {
    "url": "en/about/donate.html",
    "revision": "8784b51e99c85bd823d96204c7e62424"
  },
  {
    "url": "en/about/index.html",
    "revision": "8f49990c37b650c2b87d632db00b1dda"
  },
  {
    "url": "en/about/logo.html",
    "revision": "55320ba88defbf24abad3ce20103ec51"
  },
  {
    "url": "en/api/hook.html",
    "revision": "f98c6d31d959ac26be48355b863fc09a"
  },
  {
    "url": "en/api/index.html",
    "revision": "3dda650f669a2cae869a122602ee0d85"
  },
  {
    "url": "en/guide/install/gadget.html",
    "revision": "d16c8c5781e8414b506cade6a5abbfc1"
  },
  {
    "url": "en/guide/install/quick-start.html",
    "revision": "afa139b1658482b61f7ac27b484f3c6c"
  },
  {
    "url": "en/guide/intro.html",
    "revision": "6c64971b16afd1e760bf53f77296b00f"
  },
  {
    "url": "en/guide/usage/preference.html",
    "revision": "efa6e1917a896608226e6cc48d187f56"
  },
  {
    "url": "en/guide/usage/quick-delete.html",
    "revision": "e36d0cf681867da14e26125fcb01806e"
  },
  {
    "url": "en/guide/usage/quick-diff.html",
    "revision": "c6bd49c9f27b6a855fc9bf076fbb9e50"
  },
  {
    "url": "en/guide/usage/quick-edit.html",
    "revision": "52a346f8db6c22cf9ecde9aae9eadc65"
  },
  {
    "url": "en/guide/usage/quick-redirect.html",
    "revision": "fbda3ed94153d72e9ea3847a81b4cbe3"
  },
  {
    "url": "en/guide/usage/quick-rename.html",
    "revision": "d1282e779a50132920e84d09aaf4157c"
  },
  {
    "url": "en/guide/usage/toolbox.html",
    "revision": "77407b7f5af2e1702d4de31b2172a9ec"
  },
  {
    "url": "en/index.html",
    "revision": "75203788979ae0a636bdc719901d8ef1"
  },
  {
    "url": "en/update/14.0.0-insider.html",
    "revision": "51e452a2522b0e09fe6861fd367a859d"
  },
  {
    "url": "en/update/index.html",
    "revision": "45544a0262a9b3f958c539c3e3b4ba10"
  },
  {
    "url": "guide/index.html",
    "revision": "4ffa1a101f7bd93faf7443e56589a4f5"
  },
  {
    "url": "guide/install/gadget.html",
    "revision": "1b830922f492373e9eefae1dd7d184a0"
  },
  {
    "url": "guide/install/quick-start.html",
    "revision": "60cbeb59dc9c656353e403cf198b5cf1"
  },
  {
    "url": "guide/intro.html",
    "revision": "84b386aa6abf97cb1d5b394cf60b49c8"
  },
  {
    "url": "guide/usage/preference.html",
    "revision": "37e832b43310c94f915d2e8a61cc5063"
  },
  {
    "url": "guide/usage/quick-delete.html",
    "revision": "2015b0f72d7d4d1de51e3424f7a36d17"
  },
  {
    "url": "guide/usage/quick-diff.html",
    "revision": "919572fd138f48728561393f6e12a305"
  },
  {
    "url": "guide/usage/quick-edit.html",
    "revision": "32bd8b8b550b6e1079d6017603c7a70d"
  },
  {
    "url": "guide/usage/quick-preview.html",
    "revision": "d369d009269ed417f0396133b1f43bb0"
  },
  {
    "url": "guide/usage/quick-redirect.html",
    "revision": "d59fa7016e40f9225bbb3a68a2b51c06"
  },
  {
    "url": "guide/usage/quick-rename.html",
    "revision": "df6697359a7b49f2c9fa33fdc5211fdc"
  },
  {
    "url": "guide/usage/toolbox.html",
    "revision": "c33ca119e417408cb89c26736c6ac9bd"
  },
  {
    "url": "images/browser/compatible_chrome.png",
    "revision": "62865d1b320de643a107c7df7be889cb"
  },
  {
    "url": "images/browser/compatible_firefox.png",
    "revision": "5ac2fe75f6ea214a9e9071e293fcb30e"
  },
  {
    "url": "images/browser/compatible_ie.png",
    "revision": "02717a5efaf89b02c8f81df3bf6da579"
  },
  {
    "url": "images/browser/compatible_opera.png",
    "revision": "e8d7563914ad7b5fa2d4699e9117ab85"
  },
  {
    "url": "images/browser/compatible_safari.png",
    "revision": "95335d2b9cf3c2a4362730afff2843e6"
  },
  {
    "url": "images/browser/incompatible_chrome.png",
    "revision": "bbde0d28faf36472a1a9078b6857f0de"
  },
  {
    "url": "images/browser/incompatible_firefox.png",
    "revision": "85d5832343560153bb321b0d83252ce5"
  },
  {
    "url": "images/browser/incompatible_ie.png",
    "revision": "295715ae830913834289300244750926"
  },
  {
    "url": "images/browser/incompatible_opera.png",
    "revision": "9fcaf974145f458b77a595604a1b8722"
  },
  {
    "url": "images/browser/incompatible_safari.png",
    "revision": "08ed3f25472d0ad01601d6be9e5235c3"
  },
  {
    "url": "images/logo/InPageEdit-v2.png",
    "revision": "ed16a8de541d3431c45b427b76f07572"
  },
  {
    "url": "images/logo/InPageEdit.png",
    "revision": "7372a15201e94efe95f20e0ec65537fe"
  },
  {
    "url": "images/logo/IPE-v2.png",
    "revision": "56069053e1b1680c30b1ba43b7dc0a59"
  },
  {
    "url": "images/logo/IPE.png",
    "revision": "c63644d9bcb1825b70d31a8b0fcde338"
  },
  {
    "url": "images/logo/touch-icon.jpg",
    "revision": "0705823a38cc80e01bd058e7f9b7c892"
  },
  {
    "url": "images/webpack/webpack-icon.svg",
    "revision": "d19378a95ebe6b15d5ddea281138dcf4"
  },
  {
    "url": "images/webpack/webpack-logo.svg",
    "revision": "e0b5805d423a4ec9473ee315250968b2"
  },
  {
    "url": "index.html",
    "revision": "1948dc95467b8e3f4dafcc614b31bd11"
  },
  {
    "url": "update/1.x.html",
    "revision": "c71468626870c1fa9f8d009a210f41c0"
  },
  {
    "url": "update/14.0.0.html",
    "revision": "59d0f6748b12d93bd4b3b2dd904ab906"
  },
  {
    "url": "update/14.0.3.html",
    "revision": "3c4dd8974cef8b5a4a05ec65b6ea7727"
  },
  {
    "url": "update/14.1.0.html",
    "revision": "d4b1276389a055062910b98b1f9e9621"
  },
  {
    "url": "update/14.1.1.html",
    "revision": "e151e1e7c5e521bb85f60aaa7f11d388"
  },
  {
    "url": "update/14.1.2.html",
    "revision": "ebf51ece9448d6a3d80ea8c57751002c"
  },
  {
    "url": "update/14.1.3.html",
    "revision": "cf1deccdee336d14cf2473999cb09d7d"
  },
  {
    "url": "update/14.1.4.html",
    "revision": "d53106b8f77d5bc909791c6929292040"
  },
  {
    "url": "update/14.1.5.html",
    "revision": "f35d08d722e4881771b088af3a1c07e2"
  },
  {
    "url": "update/14.1.7.html",
    "revision": "8268c483747a0e3457134bbe5da02e63"
  },
  {
    "url": "update/14.2.0.html",
    "revision": "4d43af8482a4a33a295906ef3cdbf17a"
  },
  {
    "url": "update/2.x.html",
    "revision": "5aed0fc2030e9a40dbb6b4cda824c9ae"
  },
  {
    "url": "update/index.html",
    "revision": "ed242d0c3b8b88b7c4fdfca5e6869f55"
  },
  {
    "url": "update/next.html",
    "revision": "969535d7839d12d99ad746d56e523c27"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
