import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService, StartupService, TokenService, User } from '@core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginUser: User;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private token: TokenService,
    private startup: StartupService,
    private settings: SettingsService,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.authService.login(this.username.value, this.password.value).subscribe(
      (userDetails: User) => {
        this.loginUser = userDetails;
      },
      error => {
        console.error('Error in login' + error);
      },
      () => {
        // Set user info
        const { token, uid, username } = {
          token: this.loginUser.token,
          uid: this.loginUser.id,
          username: this.loginUser.firstName,
        };
        this.settings.setUser({
          id: this.loginUser.id,
          firstName: this.loginUser.firstName,
          lastName: this.loginUser.lastName,
          userName: this.loginUser.userName,
          email: this.loginUser.email,
          mobile: this.loginUser.mobile,
          companyId: this.loginUser.companyId,
          companyName: this.loginUser.companyName,
          companyShortName: this.loginUser.companyShortName,
          uniqueId: this.loginUser.uniqueId,
          token: this.loginUser.token,
          avatar: '/assets/images/avatar.jpg',
        });
        // Set token info
        this.token.set({ token, uid, username });
      }
    );

    // Regain the initial data
    this.startup.load().then(() => {
      let url = this.token.referrer!.url || '/';
      if (url.includes('/auth')) {
        url = '/';
      }
      this.router.navigateByUrl(url);
    });
  }
}
