import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ThankYouPage } from '../thank-you/thank-you';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface user {
 	email:string,
 	lastName:string,
 	gender:string,
 	age:string
 };

 export interface measurements {
 	top:string,
 	pants:number,
 	shoe:number
 };

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

	topSizes:Array<string> = ['S','M','L'];
	pantsSizes:Array<number> = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
	shoeSizes:Array<number> = [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13];

	userData:user = {email:"",lastName:"",gender:"mr",age:"2636"};
	fittings:measurements = {top:"L",pants:33,shoe:7.5};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  proceed(){
  	//submit form
  	localStorage.userData = JSON.stringify(this.userData);
  	localStorage.fittings = JSON.stringify(this.fittings);

  	this.navCtrl.setRoot(ThankYouPage);
  }

}
