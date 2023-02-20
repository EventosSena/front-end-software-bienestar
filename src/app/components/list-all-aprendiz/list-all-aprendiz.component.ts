import { Component } from '@angular/core';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';

@Component({
  selector: 'app-list-all-aprendiz',
  templateUrl: './list-all-aprendiz.component.html',
  styleUrls: ['./list-all-aprendiz.component.css']
})
export class ListAllAprendizComponent {

  Aprendiz:any=[];

  constructor(private serviceaprendiz:AprendizService){}

  loaderAprendiz():void{
    this.serviceaprendiz.listAprendiz().subscribe(
      data =>{
        console.log(data);
        
        this.Aprendiz = data;
        console.log(this.Aprendiz);
      }
    )
  }

}
