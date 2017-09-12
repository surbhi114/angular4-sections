import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post.service";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadRequest } from "../common/bad-request";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

//implement part is not necessary but its just to make sure that this
//component has an implementation of ngOnInit() method
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {
    
   }

   ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts
    // , error => {
    //   alert("An unexpected error occurred.");
    //   console.log(error);
    // }//we can completely remove this this error handling, the error will be bubbled 
    //to be handled by global error handler -> app-error-handler.ts
  ); 
   }

   createPost(input: HTMLInputElement) {
    let requestBody = {title: input.value}; 
    this.posts.splice(0, 0, requestBody);
    input.value = '';
    this.service.create(requestBody)
    .subscribe(post => {
      requestBody['id'] = post.id;
      //first fetch the id you got as a response of the post request
      
      //then add it to the list that we are already displaying on ui
      // this.posts.splice(0, 0, requestBody); //placing addition of the new element to posts array
      //over here means its pessimitic approach. if we first add new object to the array and then
      //send request to the server and then commit or rollback based on the server response
      //this would be optimistic approach
      
    },
    (error: AppError) => {
      //rollback
      this.posts.splice(0,1);

      if(error instanceof BadRequest)
        {
          //this.form.setErrors(error.json());
          alert("Bad request");
        }
      // alert("An unexpected error occurred.");
      // console.log(error);
      else
        throw error;
    });
   }

   updatePost(post) {
     this.service.update(post)
     .subscribe(post => {
       console.log(post);
     }
    //  , error => {
    //   alert("An unexpected error occurred.");
    //   console.log(error);
    // } will be handled by global error handler
  );
   }

   deletePost(post) {
    let index = this.posts.indexOf(post); //optimistic approach
    this.posts.splice(index, 1);
     this.service.delete(post.id)
     .subscribe( () => { //because delete usually doesnt have a response
      // let index = this.posts.indexOf(post); //pessimistic approach
      // this.posts.splice(index, 1); 
      console.log(post)
     }, (error: AppError) => {
       this.posts.splice(index, 0, post);
      if(error instanceof NotFoundError)
        alert('This post is already deleted');
      else{
        //alert("An unexpected error occurred.");
        throw error;
      }
      //console.log(error);
    });
   }

  }
