import { Component,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';

/**
 * Generated class for the WardrobePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wardrobe',
  templateUrl: 'wardrobe.html',
})
export class WardrobePage {

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

  ngOnInit(){

  }

  choose(garment:string){
  	localStorage.wardrobe = this.selection[garment];
  	this.navCtrl.push(RegistrationPage);
  }


}
