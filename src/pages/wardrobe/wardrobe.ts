import { Component,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public myElement: ElementRef,) {

  }

  ionViewDidLoad() {
  }

  ngOnInit(){

  }


}
