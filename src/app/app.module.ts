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
import { ListAllResponsibleComponent } from './components/list-all-responsible/list-all-responsible.component';
import { RegisterResponsibleComponent } from './components/register-responsible/register-responsible.component';
import { UpdateResponsibleComponent } from './components/update-responsible/update-responsible.component';
import { ListAllEventComponent } from './components/list-all-event/list-all-event.component';
import { ResgisterEventComponent } from './components/resgister-event/resgister-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { SecurityGuard } from './components/security/security.guard';


const appRoutes: Routes = [
  {path:'',component:HomeMainComponent},
  {path:'signin',component:SignInComponent},
  {path:'registeraprendiz',component:RegisterAprendizComponent,canActivate:[SecurityGuard]},
  {path:'updateaprendiz/:document',component:UpdateAprendizComponent,canActivate:[SecurityGuard]},
  {path:'listalllaprendiz',component:ListAllAprendizComponent,canActivate:[SecurityGuard]},
  {path:'constructor',component:ConstructionComponent,canActivate:[SecurityGuard]},
  {path:'registerresponsible',component:RegisterResponsibleComponent,canActivate:[SecurityGuard]},
  {path:'listallresponsible',component:ListAllResponsibleComponent,canActivate:[SecurityGuard]},
  {path:'updateresponsible/:document',component:UpdateResponsibleComponent,canActivate:[SecurityGuard]},
  {path:'registerevent',component:ResgisterEventComponent,canActivate:[SecurityGuard] },
  {path:'listallevent',component:ListAllEventComponent,canActivate:[SecurityGuard]},
  {path:'updateevent/:id',component:UpdateEventComponent,canActivate:[SecurityGuard]},
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
    ConstructionComponent,
    ListAllResponsibleComponent,
    RegisterResponsibleComponent,
    UpdateResponsibleComponent,
    ListAllEventComponent,
    ResgisterEventComponent,
    UpdateEventComponent
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
