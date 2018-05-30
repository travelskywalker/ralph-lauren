import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { EvtProvider } from '../../providers/evt/evt';

import { PassageSelectPage } from '../passage-select/passage-select';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [EvtProvider]
})
export class HomePage {

	ss: any = {};
	bg:string = "../assets/imgs/bg-ender.jpg";
	startSlides:boolean = false;
	resetFlag: boolean = false;
	lang: string = '';
	purchased:boolean = true;
	postpurchase:boolean = false;
	timeout : any;
	thngId:string = '';
	@ViewChild(Slides) slider: Slides;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private evt: EvtProvider) {
  	this.ss.imgs = [];
  	this.thngId = navParams.get('id');

  	if(typeof localStorage.evrythngUser == "undefined" || localStorage.evrythngUser == ""){
  		evt.createUser({"email":Date.now()+"@unkn.own","pass":"test1234"}).then(evtUser=>{
  			localStorage.evrythngUser = evtUser.evrythngUser;
  			localStorage.evrythngApiKey = evtUser.evrythngApiKey;

  			this.evt.scanThng(this.thngId).then(th=>{
  				if(th.hasOwnProperty('identifiers') && th.identifiers.hasOwnProperty('sku')){
  					this.bg = "../assets/imgs/"+th.identifiers.sku+".jpg";
  					this.thngLoaded();
  				}
  			})
  		}).catch(console.info);
  	}else{
  		this.evt.scanThng(this.thngId).then(th=>{
  			if(th.hasOwnProperty('identifiers') && th.identifiers.hasOwnProperty('sku')){
  				this.bg = "../assets/imgs/"+th.identifiers.sku+".jpg";
  				this.thngLoaded();
  			}
  		})

  	}
  }

  thngLoaded(){
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

  ionViewWillLeave(){
  	clearTimeout(this.timeout);
  }

  launchSlides(){
  	let preload = localStorage.preload.split(",");
  	this.ss.imgs = this.ss.imgs.concat(preload);
  	this.startSlides = true;
  	this.timeout = setTimeout(()=>{
  		try{
  			this.slider.autoplay = 2000;
  		}catch(e){
  			console.info(e);
  		}
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

  toPassage(){
  	this.navCtrl.setRoot(PassageSelectPage);
  }

}
