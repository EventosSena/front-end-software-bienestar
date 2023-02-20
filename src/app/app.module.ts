import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterAprendizComponent } from './components/register-aprendiz/register-aprendiz.component';
import { UpdateAprendizComponent } from './components/update-aprendiz/update-aprendiz.component';
import { ListAllAprendizComponent } from './components/list-all-aprendiz/list-all-aprendiz.component';
import { ConstructionComponent } from './components/construction/construction.component';


const appRoutes: Routes = [
  {path:'',component:HomeMainComponent},
  {path:'signin',component:SignInComponent},
  {path:'registeraprendiz',component:RegisterAprendizComponent },
  {path:'updateaprendiz',component:UpdateAprendizComponent },
  {path:'listalllaprendiz',component:ListAllAprendizComponent },
  {path:'constructor',component:ConstructionComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    HeaderComponent,
    SignInComponent,
    RegisterAprendizComponent,
    UpdateAprendizComponent,
    ListAllAprendizComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
