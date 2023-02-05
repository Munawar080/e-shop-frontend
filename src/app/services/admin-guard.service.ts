import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(): Observable<boolean> {
    return this.authService.appUser$.pipe(map((appUser) => appUser.isAdmin));
  }
}
