import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Menu, MenuController } from 'ionic-angular';

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

	salutation:string = "Mr.";
	name:string = "Maya";
	@ViewChild(Menu) menu: Menu;

	scores : {q1:number,q2:number,q3:number} = {q1:0,q2:0,q3:0};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit(){
  	console.log(this.menu);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankYou2Page');
  }

  setScore(text:string,score:number){
  	this.scores[text] = score;
  	console.log(this.scores);
  }

}
