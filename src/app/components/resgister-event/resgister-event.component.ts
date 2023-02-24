import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
        alert('Registro exitoso')

        setTimeout(() => {

          this.router.navigate(["/"])
          
        }, 1000);
      }
    );
  }

  



}
