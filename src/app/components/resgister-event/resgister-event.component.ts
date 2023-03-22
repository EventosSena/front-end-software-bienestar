import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-resgister-event',
  templateUrl: './resgister-event.component.html',
  styleUrls: ['./resgister-event.component.css']
})
export class ResgisterEventComponent {


  event:Event= new Event();

  constructor(private router: Router,private eventservice:EventService){}

  saveEvent() {
    console.log('holi');
    
    this.eventservice.saveEvent(this.event).subscribe(
      response  => {

        console.log(this.event);

        setTimeout(() => {

          this.router.navigate(["/listallevent"])
          
        }, 1000);
        Swal.fire('Registro del eventos '+this.event.name+' fue exitoso')
      }
    );
  }

  



}
