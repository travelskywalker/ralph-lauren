import { Component,ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';

@IonicPage()
@Component({
  selector: 'page-wardrobe',
  templateUrl: 'wardrobe.html',
})
export class WardrobePage {

@ViewChild(Slides) slides: Slides;

	selection = {
					"sunday-beach":"../assets/imgs/passages/BGSundayBeachClassics.jpg",
					"opening-night":"../assets/imgs/passages/BGOpeningNightMod.jpg",
					"casual-chic":"../assets/imgs/passages/BGACasualChicHoliday.jpg",
					"explorers-leisure":"../assets/imgs/passages/BGExplorersOfLeisure.jpg",
					"professional-fit":"../assets/imgs/passages/BGAProfessionalFit.jpg"
				};

  constructor(public navCtrl: NavController, public navParams: NavParams, public myElement: ElementRef,) {

  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
	   var activeSlide = this.navParams.get("activeSlide");
	   this.slides.slideTo(activeSlide);
	}

  ngOnInit(){

  }

  choose(garment:string){
  	localStorage.wardrobe = this.selection[garment];
  	localStorage.offer = garment;
  	this.navCtrl.push(RegistrationPage);
  }


}
