import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the EvtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

  declare var EVT;

@Injectable()
export class EvtProvider {

  evtApp : any;
  evtUser: any;
  constructor(public http: Http) {
  	//this.evtApp = 
  	let url = "//d10ka0m22z5ju5.cloudfront.net/toolkit/evrythng-js-sdk/evrythng-4.7.2.min.js";
  	let scr = document.createElement("script");
  	scr.type = "text/javascript";
  	scr.id = "evtscript"
    document.getElementsByTagName("head")[0].appendChild(scr);
  	let self = this;

  	scr.onloadeddata = function(){
  		EVT.setup({
  			geolocation:true
  		});
  		self.evtApp = new EVT.App('lJmvgVe07ETx7FpanlxBvLIur1y65GKS6f3tNh6W5SsxP6PW6pYZ2a66wvhx7RlNuVDvPiW31EifI23l');
  	}

  	scr.src = url;
  }

  loadScript(){
  }

  createUser(){
  	this.evtApp = new EVT.App('lJmvgVe07ETx7FpanlxBvLIur1y65GKS6f3tNh6W5SsxP6PW6pYZ2a66wvhx7RlNuVDvPiW31EifI23l');
  	return this.evtApp.appUser().create({
      anonymous:true
    });
  }

	getUserContext():Promise<any> {
      return(
        new Promise((resolve,reject)=>{
          resolve(
            new EVT.User({
              id: localStorage.evrythngUser,
              apiKey: localStorage.evrythngApiKey
            }, this.evtApp)
          )})
      )

  }

  scanThng(id:string){
  	/*return this.getUserContext().then(user=>{
      return user.$init.then(usr=>{
        return usr.thng(id).read();
      }).catch(console.info);
    }).catch(console.info);*/
    let hdr = new Headers;
    let rqo = new RequestOptions;
    hdr.append('Authorization',localStorage.evrythngApiKey);
    rqo.headers = hdr;
    let url = 'https://api.evrythng.com/thngs/'+id;

    return this.http.get(url,rqo).toPromise();

  }

  scanProd(id:string){
  	/*return this.getUserContext().then(user=>{
      return user.$init.then(usr=>{
        return usr.product(id).read();
      }).catch(console.info);
    }).catch(console.info);*/
    let hdr = new Headers;
    let rqo = new RequestOptions;
    hdr.append('Authorization',localStorage.evrythngApiKey);
    rqo.headers = hdr;
    let url = 'https://api.evrythng.com/products/'+id;

    return this.http.get(url,rqo).toPromise();
  }

  createAction(th:string,name:string,fields:{} = {}){
    let hdr = new Headers;
    let rqo = new RequestOptions;
    hdr.append('Authorization',localStorage.evrythngApiKey);
    hdr.append('Content-Type',"application/json");
    rqo.headers = hdr;
    let url = 'https://api.evrythng.com/actions/'+name;

    let f = JSON.stringify(fields);
    let body = `{
    	"thng":"${th}",
    	"type":"${name}",
    	"customFields":${f}
    }`;

    return this.http.post(url,body,rqo).toPromise();

  }

}
