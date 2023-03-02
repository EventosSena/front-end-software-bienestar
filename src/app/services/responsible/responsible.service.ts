import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsible } from 'src/app/models/Responsible';


@Injectable({
  providedIn: 'root'
})
export class ResponsibleService {


  constructor(private httpcient:HttpClient) { }

  saveResponsible(newResponsible: Responsible): Observable<Responsible>{

    return this.httpcient.post<Responsible>("http://localhost:8080/responsible/save", newResponsible);
    
  }

  listResponsible():  Observable<Responsible>{
    return this.httpcient.get<Responsible>("http://localhost:8080/responsible/consultall")
  }
  

  getResponsible(id : Number):  Observable<Responsible>{

    return  this.httpcient.get<Responsible>(`http://localhost:8080/responsible/consult/${id}`)
  }

  
  updateResponsible(id:number,responsible: Responsible): Observable<Responsible>{

    console.log(responsible);  
    return this.httpcient.put<Responsible>(`http://localhost:8080/responsible/update/${responsible.id}`,responsible);  
  }

  deleteResponsible(id: Number):  Observable<any>{

    return  this.httpcient.delete<any>(`http://localhost:8080/responsible/delete/${id}`)
  }

}
