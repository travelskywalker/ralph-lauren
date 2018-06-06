import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { EvtProvider } from '../../providers/evt/evt';

import { PassageSelectPage } from '../passage-select/passage-select';

declare var EVT;

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


  	/* We are dynamically adding the evrythng.js script *
  	 * We only begin using evt services once we check	*
  	 * that it has been loaded.							*/
  	this.intr = setInterval(function(){
  		let doc;
  		try{
  			doc = EVT;
  			self.checkUserStore();
			clearInterval(self.intr);
  		}catch(e){
  			//console.error(e);
  			// wait until evt has loaded
  		}
  		console.log(doc);
  	},250);
  	

  }

  /** Checks the localstorage for evrythng user vars *
   ** Creates one if it doesn't exist.				 *
   ** Perfoms the scan of the parameter id			 */
  checkUserStore(){
  	let self = this;
  	console.log('loaded');
  	if(typeof localStorage.evrythngUser == "undefined" || localStorage.evrythngUser == ""){
  		this.evt.createUser().then(evtUser=>{
  			localStorage.evrythngUser = evtUser.id;
  			localStorage.evrythngApiKey = evtUser.apiKey;

  			this.evt.scanThng(this.thngId).then(thng=>{
  				let th = thng.json();
  				localStorage.th = th.id;
  				localStorage.newEntry = !eval(th.customFields.promotion);
  				if(th.customFields.activated === "true"){
  					if(th.customFields.hasOwnProperty('purchased') && th.customFields.purchased === "true"){
			  			self.evt.scanProd(th.product).then(prod=>{
			  				let pr = prod.json();
			  				self.bg = "../assets/imgs/products/"+pr.identifiers.id+".jpg";
	  						self.thngLoaded();
			  			}).catch(console.info);
	  				}else{
		  				self.evt.createAction(th.id,'_NotPurchased',{}).then(act=>{
		  					console.log(act.json());
		  				}).catch(console.info);

			  			self.evt.scanProd(th.product).then(prod=>{
			  				let pr = prod.json();
			  				self.bg = "../assets/imgs/products/"+pr.identifiers.id+".jpg";
			  			}).catch(console.info);
	  					self.resetFlag = true;
	  					self.purchased = false;
	  				}
  				}
  				else{
  					console.log(th.customFields.activated);
  					this.launchSlides();
  				}
  			}).catch(f=>{
  				this.launchSlides();
  				console.info(f);
  			});
  		}).catch(console.info);
  	}else{
  		this.evt.scanThng(this.thngId).then(thng=>{
  			let th = thng.json();
  			localStorage.th = th.id;
  			localStorage.newEntry = !eval(th.customFields.promotion);
  				
  			if(th.customFields.activated === "true"){
  				if(th.customFields.hasOwnProperty('purchased') && th.customFields.purchased === "true"){
		  			self.evt.scanProd(th.product).then(prod=>{
		  				let pr = prod.json();
		  				self.bg = "../assets/imgs/products/"+pr.identifiers.id+".jpg";
	  					self.thngLoaded();
		  			}).catch(console.info);
	  			}else{
	  				self.evt.createAction(th.id,'_NotPurchased',{time:Date.now().toString(),a:'b'}).then(act=>{
	  					console.log(act.json());
	  				}).catch(console.info);

			  		self.evt.scanProd(th.product).then(prod=>{
			  			let pr = prod.json();
			  			self.bg = "../assets/imgs/products/"+pr.identifiers.id+".jpg";
			  		}).catch(console.info);
	  				self.resetFlag = true;
	  				self.purchased = false;
	  			}
  			}
  			else{
  				console.log(th.customFields.activated);
  				this.launchSlides();
  			}
  		}).catch(f=>{
  				this.launchSlides();
  				console.info(f);
  			});

  	}
  }

  thngLoaded(){
  	console.log('thngloaded');
  	let self = this;

  	let imgld = new Image;
  	imgld.onload = function(){
  		self.resetFlag = true;	//remove the placeholder img
	  	setTimeout(()=>{
	  		self.launchSlides();
	  	},4000);
  	}

  	imgld.src = this.bg;	//set the product's image
  }

  ionViewDidEnter(){
  }

  ionViewWillLeave(){
  	clearTimeout(this.timeout);
  	clearInterval(this.intr);
  }

  /* launch the slideshow */
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
