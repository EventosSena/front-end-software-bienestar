import { Component } from '@angular/core';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';
import { Router } from '@angular/router';
import { Aprendiz } from 'src/app/models/Aprendiz';
@Component({
  selector: 'app-register-aprendiz',
  templateUrl: './register-aprendiz.component.html',
  styleUrls: ['./register-aprendiz.component.css']
})
export class RegisterAprendizComponent {

  
  aprendiz:Aprendiz= new Aprendiz();

  constructor(private router: Router,private aprendizservice:AprendizService){}

  saveAprendiz() {
    this.aprendizservice.saveAprendiz(this.aprendiz).subscribe(
      response  => {
        console.log(response);
        alert('Registro exitoso')

        setTimeout(() => {

          this.router.navigate(["/"])
          
        }, 1000);
      }
    );
  }

}
