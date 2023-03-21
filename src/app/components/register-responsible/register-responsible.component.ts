import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Responsible } from 'src/app/models/Responsible';
import { ResponsibleService } from 'src/app/services/responsible/responsible.service';

@Component({
  selector: 'app-register-responsible',
  templateUrl: './register-responsible.component.html',
  styleUrls: ['./register-responsible.component.css']
})
export class RegisterResponsibleComponent {

  
  responsible:Responsible= new Responsible();

  constructor(private router: Router,private responsibleservice:ResponsibleService){}

  saveResponsible() {
    console.log('holi');
    
    this.responsibleservice.saveResponsible(this.responsible).subscribe(
      response  => {

        console.log(this.responsible);
        setTimeout(() => {

          this.router.navigate(["/listallresponsible"])
          
        }, 1000);
        Swal.fire('Registro del responsable '+this.responsible.full_name+' fue exitoso')
      }
    );
  }

}
