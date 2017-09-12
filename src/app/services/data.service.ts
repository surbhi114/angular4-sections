import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
import {Observable} from 'rxjs/Observable'
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadRequest } from "../common/bad-request";

@Injectable()
export class DataService {

  constructor(private http: Http, private url: string) { }

  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
  }

  create(resource){
      //return Observable.throw(new AppError());
    return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response.json())
    .catch(this.handleError); //import 'rxjs/add/operator/catch';
  }

  update(resource){
    return this.http
    .patch(this.url + "/" + resource.id , JSON.stringify({isRead: true}))
    .map(response => response.json())
    .catch(this.handleError);
  }

  delete(id) {
      //return Observable.throw(new AppError());
    return this.http.delete(this.url+"/"+id)
    .map(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    if(error.status === 404)
      return Observable.throw(new NotFoundError());//import 'rxjs/add/observable/throw'
    else if (error.status === 400)
      return Observable.throw(new BadRequest(error.json())); 
    return Observable.throw(new AppError(error));
  }

}
