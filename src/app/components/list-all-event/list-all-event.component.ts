import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-list-all-event',
  templateUrl: './list-all-event.component.html',
  styleUrls: ['./list-all-event.component.css']
})
export class ListAllEventComponent {

  Event:any=[];

  constructor(private serviceevent:EventService){}
  ngOnInit(): void {
  
    this.loaderEvent();

  }
  loaderEvent():void{
    this.serviceevent.listEvent().subscribe(
      data =>{
        console.log(data);
        
        this.Event = data;
        console.log(this.Event);
      }
    )
  }

  borrar(id: number) {

    Swal.fire({
      title: 'Desea eliminar este registro? ',
      showCancelButton: true,
      confirmButtonText: 'Si',

    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceevent.deleteEvent(id).subscribe(
          data =>{
            console.log(data);
            
            this.Event = data;
            console.log(this.Event);
            window.location.reload()
          }
        )
        Swal.fire('El registro se elimino con exito')
        setTimeout(() => {
          
          window.location.reload()
         
        }, 1000);
 
      }
    })
   
  }

}
