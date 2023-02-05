import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    console.log('==============>>>>>>>>>  app.component');
    this.authService.user$.subscribe((user) => {
      if (!user) return;

      this.userService.save(user);
      let returnUrl = localStorage.getItem('returnUrl');

      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      this.router.navigateByUrl(returnUrl as UrlTree | string);
    });
  }
}
