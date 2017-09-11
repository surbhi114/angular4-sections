import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'new-course-from',
  templateUrl: './new-course-from.component.html',
  styleUrls: ['./new-course-from.component.css']
})
export class NewCourseFromComponent{
  form = new FormGroup ({
    // name: new FormControl('', Validators.required),
    // contact: new FormGroup({
    //   email: new FormControl(),
    //   phone: new FormControl()
    // }),//  rewrite the same code with formBuilder
    topics: new FormArray([])
  });

  // //formBuilder
  // form;
  // constructor(fb: FormBuilder){
  //   this.form = fb.group({
  //     name: ['', Validators.required],
  //     contact: fb.group({
  //       email:[],
  //       phone:[]
  //     }),
  //     topics: new FormArray([])
  //   });
  // }

  addTopic(topic: HTMLInputElement) {
    if(topic.value != null && topic.value != ""){
      this.topics.push( new FormControl(topic.value) );
      topic.value='';
    }
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
