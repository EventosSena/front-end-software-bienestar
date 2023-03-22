import { Component } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  
  Attendance:any=[];

  
  constructor(private serviceattendance:AttendanceService){}

  ngOnInit(): void {
  
    this.loaderAttendance();

    
  }
  loaderAttendance():void{
    this.serviceattendance.listAttendance().subscribe(
      data =>{
        console.log(data);
        
        this.Attendance = data;
        console.log(this.Attendance);
      }
    )
  }



}
