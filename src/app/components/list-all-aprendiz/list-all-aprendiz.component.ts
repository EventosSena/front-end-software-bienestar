import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';

@Component({
  selector: 'app-list-all-aprendiz',
  templateUrl: './list-all-aprendiz.component.html',
  styleUrls: ['./list-all-aprendiz.component.css']
})
export class ListAllAprendizComponent {


  Aprendiz:any=[];

  constructor(private serviceaprendiz:AprendizService){}

  ngOnInit(): void {
  
    this.loaderAprendiz();

    
  }
  loaderAprendiz():void{
    this.serviceaprendiz.listAprendiz().subscribe(
      data =>{
        console.log(data);
        
        this.Aprendiz = data;
        console.log(this.Aprendiz);
      }
    )
  }
  borrar(document: number) {
    Swal.fire({
      title: 'Desea eliminar este registro? ',
      showCancelButton: true,
      confirmButtonText: 'Si',

    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceaprendiz.deleteAprendiz(document).subscribe(
          data =>{
            console.log(data);
            
            this.Aprendiz = data;
            console.log(this.Aprendiz);
          }
        )
        Swal.fire('El registro se elimino con exito')
        setTimeout(() => {
          
          window.location.reload()
         
        },1000);
 
      }
    })
  
  }

}


