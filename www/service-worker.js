/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json',
    "./assets/imgs/bg-ender.jpg",
    "./assets/imgs/bg-registration.jpg",
    "./assets/imgs/bg-survey.jpg",
    "./assets/imgs/star-empty.svg",
    "./assets/imgs/star-filled.svg",
    "./assets/imgs/passages/BGACasualChicHoliday.jpg",
    "./assets/imgs/passages/BGAProfessionalFit.jpg",
    "./assets/imgs/passages/BGExplorersOfLeisure.jpg",
    "./assets/imgs/passages/BGOpeningNightMod.jpg",
    "./assets/imgs/passages/BGPassageSelection.jpg",
    "./assets/imgs/passages/BGSundayBeachClassics.jpg"
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
