import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  constructor(private serviceevent:EventService,private acrivaterouter: ActivatedRoute,private router:Router){}

  event:Event= new Event();

  ngOnInit(): void {

    const id =this.acrivaterouter.snapshot.params['id'];
    this.serviceevent.getEvent(id).subscribe({
      next: data=>{
        this.event=data;
      },
      error: err=>{
        alert("usted no esta registrado en la base de datos")
      }
    })

  }

  updateEvent():void{
    const id = this.acrivaterouter.snapshot.params['id'];
    this.serviceevent.updateEvent(id, this.event).subscribe({
      next: data=>{
        this.event=data;
      },
      error: err=>{
        alert("usted no esta registrado en la base de datos")
      }
    })

  }

}
