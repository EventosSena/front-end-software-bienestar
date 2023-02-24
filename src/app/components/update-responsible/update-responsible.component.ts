import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Responsible } from 'src/app/models/Responsible';
import { ResponsibleService } from 'src/app/services/responsible/responsible.service';

@Component({
  selector: 'app-update-responsible',
  templateUrl: './update-responsible.component.html',
  styleUrls: ['./update-responsible.component.css']
})
export class UpdateResponsibleComponent {
  constructor(private serviceAprendiz:ResponsibleService,private acrivaterouter: ActivatedRoute,private router:Router){}

  responsible:Responsible= new Responsible();

  ngOnInit(): void {

    const document =this.acrivaterouter.snapshot.params['document'];
    this.serviceAprendiz.getResponsible(document).subscribe({
      next: data=>{
        this.responsible=data;
      },
      error: err=>{
        alert("usted no esta registrado en la base de datos")
      }
    })
  }

  
  updateresponsible():void{
    const document = this.acrivaterouter.snapshot.params['document'];
    this.serviceAprendiz.updateResponsible(document, this.responsible).subscribe({
      next: data=>{
        this.responsible=data;
      },
      error: err=>{
        alert("usted no esta registrado en la base de datos")
      }
    })

  }


}
