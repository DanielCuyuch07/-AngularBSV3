import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServicesService } from '../services/user-services.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(
        private userRest: UserServicesService,
        public router: Router
    ) { }

    canActivate() {
        if (this.userRest.getIdentity().role == 'ADMIN') {
            return true;
        } else {
            this.router.navigateByUrl('/archivos');
            return false;
        }
    }

}