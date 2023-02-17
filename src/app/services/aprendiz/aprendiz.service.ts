import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aprendiz } from 'src/app/models/Aprendiz';

@Injectable({
  providedIn: 'root'
})
export class AprendizService {

  constructor(private httpcient:HttpClient) { }

  saveAprendiz(newAprendiz: Aprendiz): Observable<object>{

    return this.httpcient.post("http://localhost:4200/aprendiz/save", newAprendiz);
    
  }
}
