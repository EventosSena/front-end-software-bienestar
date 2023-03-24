import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from 'src/app/models/Attendance';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  
  constructor(private httpcient:HttpClient) { }

  // saveAttendance(newAttendance: Attendance): Observable<Attendance>{

  //   return this.httpcient.post<Attendance>("http://localhost:8080/attendance/saveNew", newAttendance); 
  // } 
   saveAttendance(aprendizId:number, eventId:number){
     return this.httpcient.post<Attendance>(`http://localhost:8080/attendance/saveNewNew/${aprendizId}/${eventId}`,aprendizId); 
   } 

  listAttendance():  Observable<Attendance>{
    return this.httpcient.get<Attendance>("http://localhost:8080/attendance/consultall")
  }

}
