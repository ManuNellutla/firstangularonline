import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './User'




 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DatarService {

  heroesUrl = 'https://api.github.com/users'; 

   private headers: Headers = new Headers();

jstring: string;

  constructor(private http:HttpClient) { }

  gData() :  Observable<User[]> {
    return this.http.get<User[]>(this.heroesUrl)
      ;
  }

}