import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userurl="http://localhost:8080/user/register";

  constructor(private httpcient:HttpClient ) {}

  loguinuser(user:User):Observable<object>{
    console.log(user);
    return this.httpcient.post(`${this.userurl}`,user);
  }
}