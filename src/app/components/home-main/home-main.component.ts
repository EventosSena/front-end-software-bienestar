import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aprendiz } from 'src/app/models/Aprendiz';
import { Event } from 'src/app/models/Event';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']

})
export class HomeMainComponent {

  idAprendiz: number=0;
  idEvent: number=0;

  aprendiz:Aprendiz= new Aprendiz();

  event: Event=new Event();

  constructor(private router: Router,private aprendizservice:AprendizService){}


  
  saveAttendance() {

    
    this.aprendizservice.getAprendizAttendance(this.idAprendiz,this.idEvent).subscribe(
      response  => {

        console.log(this.aprendiz);
        console.log(this.event);
        console.log(response);
        
        alert('Registro exitoso')

        setTimeout(() => {

          this.router.navigate(["/registerevent"])
          
        }, 1000);
      }
    );
  }


}
