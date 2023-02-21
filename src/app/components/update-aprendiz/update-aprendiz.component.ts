import { Component } from '@angular/core';
import { Aprendiz } from 'src/app/models/Aprendiz';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';

@Component({
  selector: 'app-update-aprendiz',
  templateUrl: './update-aprendiz.component.html',
  styleUrls: ['./update-aprendiz.component.css']
})
export class UpdateAprendizComponent {

  constructor(private serviceAprendiz:AprendizService){}

  ngOnInit(): void {

  }

  updateAprendiz(){

  }


}
