import { Component } from '@angular/core';
import { User } from 'src/app/models/User';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
   
  user:User= new User();

 constructor(){}

}

