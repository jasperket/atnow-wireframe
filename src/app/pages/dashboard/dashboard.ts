import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header';
import { CardComponent } from '../../shared/components/card/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
})
export class DashboardComponent {
  modules = [
    { id: 'hr', label: 'Human Resource', icon: 'users' },
    { id: 'finance', label: 'Finance', icon: 'coins' },
    { id: 'procurement', label: 'Procurement', icon: 'clipboard-list' },
    { id: 'sales', label: 'Sales', icon: 'trending-up' },
    { id: 'inventory', label: 'Inventory', icon: 'boxes' },
    { id: 'manufacturing', label: 'Manufacturing', icon: 'factory' },
    { id: 'doc', label: 'DOC', icon: 'folder-open' },
    { id: 'analytics', label: 'Analytics', icon: 'line-chart' },
    { id: 'administrator', label: 'Administrator', icon: 'user-cog' },
  ];

  constructor(private router: Router) {}

  onModuleClick(id: string) {
    if (id === 'procurement') {
      this.router.navigate(['/module', id]);
    }
  }
}
