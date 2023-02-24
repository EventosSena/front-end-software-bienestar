import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AprendizService } from 'src/app/services/aprendiz/aprendiz.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(private serviceaprendiz:AprendizService ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  }
  
}
