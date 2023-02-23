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
    this.serviceevent.deleteEvent(id).subscribe(
      data =>{
        console.log(data);
        
        this.Event = data;
        console.log(this.Event);
        window.location.reload()
      }
    )
  }

}
