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

  slides = [
            "../assets/imgs/Slides-2.jpg",
            "../assets/imgs/Slides-3.jpg",
            "../assets/imgs/Slides-5.jpg",
            "../assets/imgs/Slides-6.jpg",
            "../assets/imgs/Slides-7.jpg"
          ];

  images = [
            "../assets/imgs/bg-ender.jpg",
            "../assets/imgs/bg-registration.jpg",
            "../assets/imgs/bg-survey.jpg",
            "../assets/imgs/star-empty.svg",
            "../assets/imgs/star-filled.svg",
            "../assets/imgs/passages/BGACasualChicHoliday.jpg",
            "../assets/imgs/passages/BGAProfessionalFit.jpg",
            "../assets/imgs/passages/BGExplorersOfLeisure.jpg",
            "../assets/imgs/passages/BGOpeningNightMod.jpg",
            "../assets/imgs/passages/BGPassageSelection.jpg",
            "../assets/imgs/passages/BGSundayBeachClassics.jpg",
          ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.preloader(this.slides,"slides");
      this.preloader(this.images);
      this.freshStart();
    });
  }

  preloader(arr:Array<any>=[],name:string = ""){
    Promise.all(
      arr.map(a=>{
        let i = new Image();
        i.src = a;
      })
    ).then(a=>{
      if(name != "" && name.trim().length > 0) localStorage.preload = arr;
    });
  }

  freshStart(){
    localStorage.removeItem("country");
    localStorage.removeItem("fittings");
    localStorage.removeItem("newEntry");
    localStorage.removeItem("offer");
    localStorage.removeItem("th");
    localStorage.removeItem("userData");
    localStorage.removeItem("wardrobe");
  }
}

