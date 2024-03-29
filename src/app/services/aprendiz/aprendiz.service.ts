import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Aprendiz } from 'src/app/models/Aprendiz';



@Injectable({
  providedIn: 'root'
})
export class AprendizService {

  constructor(private httpcient:HttpClient) { }

  saveAprendiz(newAprendiz: Aprendiz): Observable<Aprendiz>{

    return this.httpcient.post<Aprendiz>("http://localhost:8080/aprendiz/save",  newAprendiz);
    
  }

  listAprendiz():  Observable<Aprendiz>{
    return this.httpcient.get<Aprendiz>("http://localhost:8080/aprendiz/consultall")
  }

  
  getAprendiz(id : Number):  Observable<Aprendiz>{

    return  this.httpcient.get<Aprendiz>(`http://localhost:8080/aprendiz/consult/${id}`)
  }

  updateAprendiz(id:number,aprendiz: Aprendiz): Observable<Aprendiz>{

    console.log(aprendiz);  
    return this.httpcient.put<Aprendiz>(`http://localhost:8080/aprendiz/update/${aprendiz.document}`,aprendiz);  
  }

  deleteAprendiz(id : Number):  Observable<any>{

    return  this.httpcient.delete<any>(`http://localhost:8080/aprendiz/delete/${id}`)
  }

  
  
  getAprendizAttendance(idA : Number, idE: Number):  Observable<Aprendiz>{

    return  this.httpcient.get<Aprendiz>(`http://localhost:8080/aprendiz/consultAttendance?id=${idA}&id=${idE}`)
  }





}




