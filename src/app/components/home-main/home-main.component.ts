import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';
import { Attendance } from 'src/app/models/Attendance';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']

})
export class HomeMainComponent {



  // aprendiz:Aprendiz= new Aprendiz();

  // event: Event=new Event();
  a:number=0;
  b:number=0;
  attendance:Attendance=new Attendance(this.a,this.b);

  constructor(private router: Router,private Attendanceservice:AttendanceService){}

  
  saveAttendance() {

    this.Attendanceservice.saveAttendance(this.a,this.b).subscribe(
      response  => {
        console.log(this.attendance);
        setTimeout(() => {
          
          this.router.navigate(["/listallattendance"])
         
        }, 1000);
        Swal.fire('Registro de la asistencia a sido exitoso')
      }
    );
  }

  
  // getAttendance () {

    
  //   this.aprendizservice.getAprendizAttendance(this.idAprendiz,this.idEvent).subscribe(
  //     response  => {

  //       console.log(this.aprendiz);
  //       console.log(this.event);
  //       console.log(response);
        
  //       alert('Registro exitoso')

  //       setTimeout(() => {

  //         this.router.navigate(["/registerevent"])
          
  //       }, 1000);
  //     }
  //   );
  // }


}
