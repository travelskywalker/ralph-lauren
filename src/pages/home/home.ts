import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	ss: any = {};
	bg:string = "../assets/imgs/samp1.jpg";
	startSlides:boolean = false;
	resetFlag: boolean = false;
	lang: string = '';
	@ViewChild(Slides) slider: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ss.imgs = [];
  	console.log(navParams.get('id'));
  }

  ngAfterViewInit(){
  	let self = this;

  	let imgld = new Image;
  	imgld.onload = function(){
	  	setTimeout(()=>{
	  		self.launchSlides();
	  	},2000);
  	}

  	imgld.src = this.bg;
  }

  ionViewDidEnter(){
  }

  launchSlides(){
  	let preload = localStorage.preload.split(",");
  	this.ss.imgs = this.ss.imgs.concat(preload);
  	this.startSlides = true;
  	setTimeout(()=>{
  		this.slider.autoplay = 2000;
  	},500);
  }

  check($event){
  	if(this.resetFlag) return ;
	if($event.realIndex == 0){

	}
  }

  proceedFlow(lang){
  	this.lang = lang;

  }

}
