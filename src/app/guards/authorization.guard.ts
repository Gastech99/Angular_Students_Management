import { CanActivateFn } from '@angular/router';

import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationGuard {
  constructor(private authService: AuthenticationService, private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let authorize = false;
    let authorizeeRoles: string[] = route.data['roles'];
    let roles: string[] = this.authService.roles;
    for (let i: number = 0; i < roles.length; i++) {
      if(authorizeeRoles.includes(roles[i])){
        authorize = true;
      }
      
    }
    return authorize;
  }
}