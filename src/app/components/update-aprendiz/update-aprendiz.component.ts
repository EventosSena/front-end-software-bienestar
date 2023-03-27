import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aprendiz } from 'src/app/models/Aprendiz';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';

@Component({
  selector: 'app-update-aprendiz',
  templateUrl: './update-aprendiz.component.html',
  styleUrls: ['./update-aprendiz.component.css']
})
export class UpdateAprendizComponent {

  constructor(private serviceAprendiz:AprendizService,private acrivaterouter: ActivatedRoute,private router:Router){}

  aprendiz:Aprendiz= new Aprendiz();

  ngOnInit(): void {

    const id =this.acrivaterouter.snapshot.params['id'];
    this.serviceAprendiz.getAprendiz(id).subscribe({
      next: data=>{
        this.aprendiz=data;
      },
      error: err=>{
        alert("usted no esta registrado en la base de datos")
      }
    })

  }

  updateAprendiz():void{
    const id = this.acrivaterouter.snapshot.params['id'];
    this.serviceAprendiz.updateAprendiz(id, this.aprendiz).subscribe(
      response  => {

        console.log(this.aprendiz);
        alert('Registro exitoso')

        setTimeout(() => {

          this.router.navigate(["/listalllaprendiz"])
          
        }, 1000);
        Swal.fire('Actualizacion  del aprendiz '+this.aprendiz.full_name+' fue exitoso')
      }
    );
  }


}
