import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ThankYouPage } from '../thank-you/thank-you';

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

	topSizes:Array<string> = ['S','M','L'];
	pantsSizes:Array<number> = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
	shoeSizes:Array<number> = [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13];

	userData:user = {email:"",lastName:"",gender:"mr",age:"2636"};
	fittings:measurements = {top:"L",pants:33,shoe:7.5};

  errorClass_lastname: string = '';
  errorClass_email: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  proceed(){
    let validation = this.validate(this.userData);

    if(!validation.valid){
      if(validation.error.hasOwnProperty('lastname')){
        this.errorClass_lastname = 'error';
      }else{
        this.errorClass_lastname = '';
      }
      
      if(validation.error.hasOwnProperty('email')){
        this.errorClass_email = 'error';
      }else{
        this.errorClass_email = '';
      }
        
    }else{

    	// submit form
    	localStorage.userData = JSON.stringify(this.userData);
    	localStorage.fittings = JSON.stringify(this.fittings);

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
