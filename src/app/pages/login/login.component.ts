import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-page">
      <div class="top-accent"></div>
      <div class="login-container">
        <h1 class="logo">LOGO</h1>
        <p class="subtitle">Unified Business Management Platform</p>
        
        <form class="login-form">
          <dx-text-box label="Username" labelMode="floating" placeholder="user001" [(value)]="username" [elementAttr]="{ class: 'dx-field-override' }"></dx-text-box>
          
          <dx-text-box label="Password" mode="password" labelMode="floating" placeholder="******" [(value)]="password" [elementAttr]="{ class: 'dx-field-override' }"></dx-text-box>
          
          <div class="profile-select">
            <dx-select-box [items]="['System Administrator', 'Standard User']" label="Profile" labelMode="floating" [(value)]="profile" [elementAttr]="{ class: 'dx-field-override' }"></dx-select-box>
          </div>

          <div class="button-container">
            <dx-button text="Login" width="100%" height="45" type="default" stylingMode="contained" (onClick)="onLogin()"></dx-button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      width: 100%;
      height: 100vh;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .top-accent {
      width: 100%;
      height: 40px;
      background: linear-gradient(90deg, #0ba3ac 0%, #76ca62 100%);
      position: sticky;
      top: 0;
    }

    .login-container {
      width: 100%;
      max-width: 400px;
      margin-top: 60px;
      padding: 40px;
      text-align: center;
    }

    .logo {
      font-size: 48px;
      font-weight: 800;
      color: #000;
      margin-bottom: 10px;
      letter-spacing: 2px;
    }

    .subtitle {
      color: #333;
      font-size: 16px;
      margin-bottom: 50px;
      font-weight: 400;
    }

    .login-form {
      text-align: left;
    }

    .profile-select {
      position: relative;
    }

    .button-container {
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }

    ::ng-deep .dx-field-override {
      margin-bottom: 20px;
    }

    /* Responsive */
    @media (max-width: 480px) {
      .login-container {
        padding: 20px;
      }
      .logo {
        font-size: 36px;
      }
    }
  `],
  standalone: false
})
export class LoginComponent {
  username = '';
  password = '';
  profile = '';

  constructor(private router: Router) {}

  onLogin() {
    // Navigate to dashboard
    this.router.navigate(['/dashboard']);
  }
}
