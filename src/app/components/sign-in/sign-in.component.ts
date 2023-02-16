import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
   
  user:User= new User();

 constructor(private servicio:UserService){}

  userloguin(){
    console.log(this.user)
    this.servicio.loguinuser(this.user).subscribe({
      next: data=>{
        alert("felicidades acabas de loguearte")
      },
      error: err=>{
        alert("usted no esta registrado en la base de datos")
      }
    })
  }
}

