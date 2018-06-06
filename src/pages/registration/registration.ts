import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ThankYouPage } from '../thank-you/thank-you';

import { EvtProvider } from '../../providers/evt/evt';

import { config } from '../../config/config';

 export interface user {
 	email:string,
 	lastName:string,
 	gender:string,
 	age:string
 };

 export interface measurements {
 	top:string,
 	pants:number,
 	shoe:number
 };

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

	topSizes:Array<string> = config.top;
	pantsSizes:Array<number> = config.pants;
	shoeSizes:Array<number> = config.shoes;
	ages:Array<string> = config.age;

	userData:user = {email:"",lastName:"",gender:"mr",age:config.age[0]};
	fittings:measurements = {top:"L",pants:33,shoe:7.5};

  errorClass_lastname: string = '';
  errorClass_email: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private evt: EvtProvider) {
  }

  ionViewDidLoad() {
  }

  proceed(){
    let validation = this.validate(this.userData);

    if(!validation.valid){
      if(validation.error.includes('lastname')){
        this.errorClass_lastname = 'error';
      }else{
        this.errorClass_lastname = '';
      }
      
      if(validation.error.includes('email')){
        this.errorClass_email = 'error';
      }else{
        this.errorClass_email = '';
      }
        
    }else{

    	// submit form
    	localStorage.userData = JSON.stringify(this.userData);
    	localStorage.fittings = JSON.stringify(this.fittings);

    	this.evt.createAction(localStorage.th,"_OfferAccepted",{offerType:localStorage.offer}).then(act=>{
    		console.info(act.json());
    	}).catch(console.info);

    	this.navCtrl.setRoot(ThankYouPage);
    }
      
  }

  validate(data: any){
    var lastname;
    var email;
    var error = [];

    if(data.lastName != ''){
      lastname = true;
    }else{
      lastname = false;
      error.push('lastname');
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;

    if (filter.test(data.email)) {
      email = true;
    }
    else {
      email = false;
      error.push('email');
    }

    if((lastname == false && email == false) || (lastname == false || email == false) )
      return {valid: false, error: error};
    else{
      return {valid: true, error:null};
    }
  }

}
