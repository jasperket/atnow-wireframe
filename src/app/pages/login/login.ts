import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DxTextBoxComponent, DxSelectBoxComponent, DxButtonComponent } from 'devextreme-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [FormsModule, DxTextBoxComponent, DxSelectBoxComponent, DxButtonComponent],
  standalone: true,
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
