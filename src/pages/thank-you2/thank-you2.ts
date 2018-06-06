import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ThankYou2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thank-you2',
  templateUrl: 'thank-you2.html',
})
export class ThankYou2Page {

	salutation:string = "mr";
	name:string = "Maya";
	newEntry:boolean = eval(localStorage.newEntry);
  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit(){
  	let dt = JSON.parse(localStorage.userData);
  	this.salutation = dt.gender;
  	this.name = dt.lastName;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankYou2Page');
  }

}
