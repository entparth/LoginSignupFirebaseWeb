import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user: { email?: any, firstName?:any, lastName?:any  } = {}
  public loginForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public FormBuilder:FormBuilder) {
    this.initializeForm();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  initializeForm(){
    this.loginForm = this.FormBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      LastName: ['', Validators.compose([Validators.required])],
      secondName: ['', Validators.compose([Validators.required])],
    })

    console.log('values from the form', this.loginForm)
  }

  signupUser(){

  }
}
