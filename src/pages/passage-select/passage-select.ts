import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WardrobePage } from '../wardrobe/wardrobe';

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

  choose(option:int){
  	this.navCtrl.push(WardrobePage,{activeSlide: option});
  }

}
