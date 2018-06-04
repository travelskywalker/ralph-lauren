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
	init_bg:string = "../assets/imgs/bg-ender.jpg";
	bg:string = "";
	startSlides:boolean = false;
	resetFlag: boolean = false;
	lang: string = '';
	purchased:boolean = true;
	postpurchase:boolean = false;
	timeout : any;
	thngId:string = '';
	intr: any;
	@ViewChild(Slides) slider: Slides;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private evt: EvtProvider) {
  	this.ss.imgs = [];
  	this.thngId = navParams.get('id');
  	let self = this;
  	let scheck = false;
  	this.intr = setInterval(function(){
  		let doc = <HTMLScriptElement>document.getElementById("evtscript");
  		if(doc){
  			doc.onload = function(){
  				scheck = true;
  				self.checkUserStore()
  			}
  		}
  		//console.log(doc);
  		if(scheck) clearInterval(self.intr);
  	},250);
  	

  }

  checkUserStore(){

  	if(typeof localStorage.evrythngUser == "undefined" || localStorage.evrythngUser == ""){
  		this.evt.createUser({"email":Date.now()+"@unkn.own","pass":"test1234"}).then(evtUser=>{
  			localStorage.evrythngUser = evtUser.evrythngUser;
  			localStorage.evrythngApiKey = evtUser.evrythngApiKey;

  			this.evt.scanThng(this.thngId).then(th=>{
  				if(th.hasOwnProperty('identifiers') && th.identifiers.hasOwnProperty('sku')){
  					this.bg = "../assets/imgs/"+th.identifiers.sku+".jpg";
  					this.thngLoaded();
  				}
  			}).catch(console.info);
  		}).catch(console.info);
  	}else{
  		this.evt.scanThng(this.thngId).then(th=>{
  			if(th.hasOwnProperty('identifiers') && th.identifiers.hasOwnProperty('sku')){
  				this.bg = "../assets/imgs/"+th.identifiers.sku+".jpg";
  				this.thngLoaded();
  			}
  		}).catch(console.info);

  	}
  }

  thngLoaded(){
  	let self = this;

  	let imgld = new Image;
  	imgld.onload = function(){
  		self.resetFlag = true;	//remove the placeholder img
	  	setTimeout(()=>{
	  		self.launchSlides();
	  	},3000);
  	}

  	imgld.src = this.bg;	//set the product's image
  }

  ionViewDidEnter(){
  }

  ionViewWillLeave(){
  	clearTimeout(this.timeout);
  	clearInterval(this.intr);
  }

  launchSlides(){
  	let preload = localStorage.preload.split(",");
  	this.ss.imgs = this.ss.imgs.concat(preload);
  	this.timeout = setTimeout(()=>{
  		this.startSlides = true;	//start the slides
  		try{
  			this.slider.autoplay = 2000;
  		}catch(e){
  			//console.info(e);
  		}
  	},1000);
  }

  proceedFlow(lang){
  	this.lang = lang;
  }

  toPassage(){
  	this.navCtrl.setRoot(PassageSelectPage);
  }

}
