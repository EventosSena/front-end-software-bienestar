import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpcient:HttpClient) { }

  saveEvent(newEvent: Event): Observable<Event>{

    return this.httpcient.post<Event>("http://localhost:8080/event/save", newEvent);
    
  }

  listEvent():  Observable<Event>{
    return this.httpcient.get<Event>("http://localhost:8080/event/consultall")
  }

  getEvent(id: Number):  Observable<Event>{

    return  this.httpcient.get<Event>(`http://localhost:8080/event/consult/${id}`)
  }

  updateEvent(id:number,event: Event): Observable<Event>{

    console.log(event);  
    return this.httpcient.put<Event>(`http://localhost:8080/event/update/${event.id}`,event);  
  }

  deleteEvent(id : Number):  Observable<any>{

    return  this.httpcient.delete<any>(`http://localhost:8080/event/delete/${id}`)
  }
}
