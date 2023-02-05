import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireObject } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/auth';
import { map, observable, Observable, switchMap, of } from 'rxjs';
import { AppUser } from '../models/appuser';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    console.log('heloo');
    console.log('heloo');
    console.log('heloo');
    console.log('heloo');
    this.user$ = this.afAuth.authState as Observable<firebase.User>;
    this.user$.subscribe((user) => {
      console.log(user);
    });
  }

  login() {
    let url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', url);
    this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap((user) => {
        if (user) return this.userService.get(user.uid).valueChanges();

        return of(null);
      })
    ) as Observable<AppUser>;
  }
}
