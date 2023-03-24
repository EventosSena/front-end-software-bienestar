import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from 'src/app/models/Attendance';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  
  constructor(private httpcient:HttpClient) { }

  saveAttendance(newAttendance: Attendance): Observable<Attendance>{

    return this.httpcient.post<Attendance>("http://localhost:8080/attendance/saveNewNew/${id}", newAttendance); 
  } 
  // saveAttendance(aprendizId:number, eventId:number): Observable<Attendance>{
  //   newAttendance:Attendance = new Attendance(aprendizId, eventId);
  //   return this.httpcient.post<Attendance>(`http://localhost:8080/attendance/saveNewNew/${aprendizId}/${eventId}`, newAttendance); 
  // } 

  listAttendance():  Observable<Attendance>{
    return this.httpcient.get<Attendance>("http://localhost:8080/attendance/consultall")
  }

}
