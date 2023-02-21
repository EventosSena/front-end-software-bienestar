import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aprendiz } from 'src/app/models/Aprendiz';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';

@Component({
  selector: 'app-update-aprendiz',
  templateUrl: './update-aprendiz.component.html',
  styleUrls: ['./update-aprendiz.component.css']
})
export class UpdateAprendizComponent {

  constructor(private serviceAprendiz:AprendizService,private acrivaterouter: ActivatedRoute,private router:Router){}

  aprendiz:Aprendiz= new Aprendiz();

  ngOnInit(): void {

    const document =this.acrivaterouter.snapshot.params['document'];
    this.serviceAprendiz.getAprendiz(document).subscribe({
      next: data=>{
        this.aprendiz=data;
      },
      error: err=>{
        alert("usted no esta registrado en la base de datos")
      }
    })

  }

  updateAprendiz():void{
    const document = this.acrivaterouter.snapshot.params['document'];
    this.serviceAprendiz.updateAprendiz(document, this.aprendiz).subscribe({
      next: data=>{
        this.aprendiz=data;
      },
      error: err=>{
        alert("usted no esta registrado en la base de datos")
      }
    })

  }


}
