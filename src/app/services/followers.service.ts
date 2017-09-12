import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
import {Observable} from 'rxjs/Observable'
import { NotFoundError } from "../common/not-found-error";
import { AppError } from "../common/app-error";

@Injectable()
export class FollowersService {

  private url = "https://api.github.com/users/";
  constructor(private http: Http) { }

  getFollowers (user) {
    return this.http.get(this.url + user + "/followers")
    .map(response => response.json())
    .catch(this.handleError);
  }

  handleError(error) {
    if(error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError());
  }

}
