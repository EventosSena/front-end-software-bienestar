import Swal from 'sweetalert2';
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
    console.log('holi');
    
    this.aprendizservice.saveAprendiz(this.aprendiz).subscribe(
      response  => {
        console.log(this.aprendiz);
        setTimeout(() => {
          
          this.router.navigate(["/"])
         
        }, 1000);
        Swal.fire('Registro exitoso')
      }
    );
  }

}
