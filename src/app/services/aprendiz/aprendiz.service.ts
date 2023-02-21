import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Aprendiz } from 'src/app/models/Aprendiz';



@Injectable({
  providedIn: 'root'
})
export class AprendizService {

  constructor(private httpcient:HttpClient) { }

  saveAprendiz(newAprendiz: Aprendiz): Observable<Aprendiz>{

    return this.httpcient.post<Aprendiz>("http://localhost:8080/aprendiz/save", newAprendiz);
    
  }

  listAprendiz():  Observable<Aprendiz>{
    return this.httpcient.get<Aprendiz>("http://localhost:8080/aprendiz/consultall")
  }

  updateAprendiz(aprendiz: Aprendiz): Observable<Aprendiz>{

    console.log(aprendiz);  
    return this.httpcient.put<Aprendiz>(`http://localhost:8080/barber/update/${aprendiz.document}`,aprendiz);  
  }



}




