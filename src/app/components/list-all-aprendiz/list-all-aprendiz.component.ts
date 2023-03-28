import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';

@Component({
  selector: 'app-list-all-aprendiz',
  templateUrl: './list-all-aprendiz.component.html',
  styleUrls: ['./list-all-aprendiz.component.css']
})
export class ListAllAprendizComponent {
  search:any;
  Aprendiz:any=[];

  filter={
    contenido:''
  }

  constructor(private serviceaprendiz:AprendizService,private acrivaterouter: ActivatedRoute,private router:Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
  
    this.loaderAprendiz();

    
  }
  loaderAprendiz():void{
    this.serviceaprendiz.listAprendiz().subscribe(
      data =>{
        console.log(data);
        
        this.Aprendiz = data;
        console.log(this.Aprendiz);
      }
    )
  }
  borrar(document: number) {
    Swal.fire({
      title: 'Desea eliminar este registro? ',
      showCancelButton: true,
      confirmButtonText: 'Si',

    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceaprendiz.deleteAprendiz(document).subscribe(
          data =>{
            console.log(data);
            
            this.Aprendiz = data;
            console.log(this.Aprendiz);
          }
        )
        Swal.fire('El registro se elimino con exito')
        setTimeout(() => {
          
          window.location.reload()
         
        },1000);
 
      }
    })
  
  }

  listaprendiz() {
    throw new Error('Method not implemented.');
    }
    
    


  getAprendiz(document:number){ 
    
    const id =this.acrivaterouter.snapshot.params['id'];
    this.serviceaprendiz.getAprendiz(document).subscribe({
      next: data=>{
        this.Aprendiz=data;
        console.log(this.Aprendiz);
        
      },
      error: err=>{
        alert("usted no esta registrado en la base de datos")
      }
    })
  }

}


