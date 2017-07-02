import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class DataService {
    http: any;
    baseUrl: String;
  constructor(http: Http) {
    this.http = http;
    this.baseUrl = 'https://gateway.marvel.com/v1/public/';
   }
    getComics() {
        return this.http.get(this.baseUrl+'comics?format=comic&dateDescriptor=thisMonth&orderBy=onsaleDate&apikey=6cf3adeb76d04a5b80fbb7c273de5e52&hash=e7b33683f7234e9a262add8c3b918c74&ts=1')
        .map(res => res.json());
}
}
