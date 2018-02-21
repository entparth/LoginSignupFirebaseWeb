import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
// import * as firebase from 'firebase';
import * as firebase from 'firebase';

import { LoginSignupPage } from '../pages/login-signup/login-signup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.initializeFirebase();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  initializeFirebase(){
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoKXqFP14GujCHftLEZyg1fSeHiHcem7I",
    authDomain: "fir-login-26049.firebaseapp.com",
    databaseURL: "https://fir-login-26049.firebaseio.com",
    projectId: "fir-login-26049",
    storageBucket: "fir-login-26049.appspot.com",
    messagingSenderId: "693983867965"
  };
  firebase.initializeApp(config);
  const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if(!user){
        this.rootPage = LoginSignupPage;
        unsubscribe();
      } else {
        this.rootPage = LoginSignupPage;
        unsubscribe();
      }
    });
  }
}
