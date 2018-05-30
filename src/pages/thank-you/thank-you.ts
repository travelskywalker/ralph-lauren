import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { ThankYou2Page } from '../thank-you2/thank-you2';
/**
 * Generated class for the ThankYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thank-you',
  templateUrl: 'thank-you.html',
})
export class ThankYouPage {

	filled:string = "../assets/imgs/star-filled.svg";
	empty:string = "../assets/imgs/star-empty.svg";

	scores : {q1:number,q2:number,q3:number} = {q1:0,q2:0,q3:0};
	img:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu:MenuController) {
  	this.img = localStorage.wardrobe || {};
  }

  ngAfterViewInit(){
  	let self = this;
  	//this.mnc.open(this.menu.toggle())
  	setTimeout(()=>{
  		self.menu.open();
  	},3000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankYou2Page');
  }

  setScore(text:string,score:number){
  	this.scores[text] = score;
  	console.log(this.scores);
  }

  lastPage(){
  	this.navCtrl.setRoot(ThankYou2Page);
  }

}
