import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HeaderComponent } from './components/header/header.component';


const appRoutes: Routes = [
  {path:'holi',component:HomeMainComponent  },



]
@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
