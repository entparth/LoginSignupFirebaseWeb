import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalsProvider {
  userId: string = '';

  constructor(public http: HttpClient) {
    console.log('Hello GlobalsProvider Provider');
  }

  // used to remove any other data if we logut the user
  clear() {
    this.userId = undefined;
   
  }
}
