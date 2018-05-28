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
  	console.log(EVT);
  }


}
