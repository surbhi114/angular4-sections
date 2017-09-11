import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from "./username.validators";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  //the first arg is an object that contains all the properties that are common between
  form = new FormGroup({
    //here we are not calling the validator methods, we are only referencing them. 
    //remeber to keep all the validators in [] below
    account: new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(3), 
        UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });
  
  get username() {
    //to avoid having form.get('username') in template
    return this.form.get('account.username');
  }

  login() {
     this.form.setErrors({
       invalidLogin: true
     });
  }
}
