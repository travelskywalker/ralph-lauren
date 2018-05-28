import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	ss: any = {};
	bg:string = "../assets/imgs/samp1.jpg";
	startSlides:boolean = false;
	lang: string = '';
	@ViewChild(Slides) slider: Slides;
  constructor(public navCtrl: NavController) {
  	this.ss.imgs = [];
  }

  ngAfterViewInit(){
  	let self = this;
  	setTimeout(()=>{
  		self.launchSlides();
  	},2000);
  }

  ionViewDidEnter(){
  }

  launchSlides(){
  	let preload = localStorage.preload.split(",");
  	this.ss.imgs = this.ss.imgs.concat(preload);
  	this.startSlides = true;
  }

  proceedFlow(lang){
  	this.lang = lang;

  }

}
