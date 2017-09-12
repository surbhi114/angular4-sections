import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { DataService } from "./data.service";

@Injectable()
export class PostService extends DataService{

  constructor(http: Http) { 
    super(http, "https://jsonplaceholder.typicode.com/posts");
  }

}
