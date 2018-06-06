import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WardrobePage } from '../wardrobe/wardrobe';
import { ThankYou2Page } from '../thank-you2/thank-you2';

@IonicPage()
@Component({
  selector: 'page-passage-select',
  templateUrl: 'passage-select.html',
})
export class PassageSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassageSelectPage');
  }

  choose(option:number){
    if(localStorage.newEntry === "true"){
      this.navCtrl.push(WardrobePage,{activeSlide: option});
    }else{
      this.navCtrl.push(ThankYou2Page)
    }
  }

}
