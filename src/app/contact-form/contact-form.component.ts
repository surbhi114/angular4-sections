import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  log(x){
    console.log("NgModel: "+ x);
  }
  submit(f){
    console.log("onSubmit: "+ f.value.comment);
  }
  
  contactMethods= [
    {
      id:1,
      name: 'Email'
    },
    {
      id:2,
      name: 'Phone'
    }
  ]

}
