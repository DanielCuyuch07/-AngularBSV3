import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServicesService } from '../services/user-services.service';

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {

    constructor(
        public userRest: UserServicesService,
        public router: Router
    ) { }

    canActivate() {
        if (this.userRest.getIdentity().role == 'CLIENT' ||
            this.userRest.getIdentity().role == 'ADMIN') {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }

}