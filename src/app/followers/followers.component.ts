import { Component, OnInit } from '@angular/core';
import { FollowersService } from "../services/followers.service";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: any[];

  constructor(private service: FollowersService) { }

  ngOnInit() {
    
  }

  getFollowers(user: HTMLInputElement) {
    this.service.getFollowers(user.value)
    .subscribe(followers => {
      this.followers = followers;
      console.log(followers);
    },
    (error: AppError)=> {
      if(error instanceof NotFoundError)
        alert("The user is not found!");
      else
        alert("An unexpected error occured");
    });
  }

}
