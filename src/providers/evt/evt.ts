import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
  	this.evtApp = new EVT.App('lJmvgVe07ETx7FpanlxBvLIur1y65GKS6f3tNh6W5SsxP6PW6pYZ2a66wvhx7RlNuVDvPiW31EifI23l');
  }

  createUser(usr:{email:string,pass:string}){
  	return this.evtApp.appUser().create({
      email:usr.email,
      firstName:"test",
      lastName:"test",
      password: usr.pass
    }).then(appUser=>{
      return appUser.validate();
    }).catch(err=>{
      return err
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
  	return this.getUserContext().then(user=>{
      return user.$init.then(usr=>{
        return usr.thng(id).read();
      }).catch(console.info);
    }).catch(console.info);
  }

}
