import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { ResponsibleService } from 'src/app/services/responsible/responsible.service';

@Component({
  selector: 'app-list-all-responsible',
  templateUrl: './list-all-responsible.component.html',
  styleUrls: ['./list-all-responsible.component.css']
})
export class ListAllResponsibleComponent {

  responsible:any=[];

  constructor(private serviceresponsible:ResponsibleService){}
  ngOnInit(): void {
  
    this.loaderResponsible();

  }
  loaderResponsible():void{
    this.serviceresponsible.listResponsible().subscribe(
      data =>{
        console.log(data);
        
        this.responsible = data;
        console.log(this.responsible);
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
        this.serviceresponsible.deleteResponsible(document).subscribe(
          data =>{
            console.log(data);
            
            this.responsible = data;
            console.log(this.responsible);
            window.location.reload()
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
