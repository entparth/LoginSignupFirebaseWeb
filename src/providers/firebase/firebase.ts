import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { GlobalsProvider } from '../globals/globals';
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient, public globals:GlobalsProvider) {
    console.log('Hello FirebaseProvider Provider');
  }
  signUpUser(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    
    console.log('values', )
  }

  //get user data from database
  getUserData() {
    return new Promise((resolve, reject) => {
      var uid = this.globals.userId;
      var dbRef = firebase.database().ref('users/' + uid);

      var userData: any;
      dbRef.once('value', (data) => {
        // console.log('USERDATA ', data.val());
        if (data.val()) {
          resolve({ data: data.val() });
        } else {
          reject({ msg: 'Data Not Found' });
        }
      });
    });
  }


// example code if we want to fetch any other data we add to the database
  fetchAllJobs() {
    var uid = this.globals.userId;
    var companyName = this.globals.userData.typeName;
    return new Promise((resolve, reject) => {
      var dbRef = firebase.database().ref('/allJobs')
      dbRef.on('value', (jobs) => {
        var allJobsArr = _.toArray(jobs.val());
        console.log('all Jobs on fireData', allJobsArr);
        this.globals.allJobs = allJobsArr
        this.event.publish('jobsAdded')
        console.log("globals data", this.globals.allJobs)
        resolve(allJobsArr);
      })
    });
  }
}
