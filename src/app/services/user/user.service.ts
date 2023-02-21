import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private httpcient:HttpClient ) {}

  loguinuser(user:User):Observable<User>{
    console.log(user);
    return this.httpcient.post<User>('http://localhost:8080/user/register',user);
  }
}