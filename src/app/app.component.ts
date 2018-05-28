import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  images = [
            "../assets/imgs/Slides-2.jpg",
            "../assets/imgs/Slides-3.jpg",
            "../assets/imgs/Slides-5.jpg",
            "../assets/imgs/Slides-6.jpg",
            "../assets/imgs/Slides-7.jpg"
            ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.preloader();
    });
  }

  preloader(){
    this.images.map(a=>{
      let i = new Image();
      i.src = a;
    });
    localStorage.preload = this.images;
  }
}

