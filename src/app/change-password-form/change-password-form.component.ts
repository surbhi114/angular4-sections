import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PasswordValidators } from "./password.validators";

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  oldPass = "1234";
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.shouldMatchOldPassword),
    changedPassword: new FormGroup({
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }, PasswordValidators.shouldMatchNewPassword)
  });

  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get newPassword(){
    return this.form.get('changedPassword.newPassword');
  }
  get confirmPassword(){
    return this.form.get('changedPassword.confirmPassword');
  }
  get changedPassword() {
    return this.form.get('changedPassword');
  }
}
