import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aprendiz } from 'src/app/models/Aprendiz';
import { Event } from 'src/app/models/Event';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';
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

  attendance:Attendance=new Attendance();

  constructor(private router: Router,private Attendanceservice:AttendanceService){}


  
  
  saveAttendance() {

    this.Attendanceservice.saveAttendance(this.attendance).subscribe(
      response  => {
        console.log(this.attendance);
        setTimeout(() => {
          
          this.router.navigate(["/listalllaprendiz"])
         
        }, 1000);
        Swal.fire('Registro del aprendiz')
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
