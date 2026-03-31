import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-header></app-header>
    <div class="dashboard-page">
      <div class="card-grid">
        @for (item of modules; track item.id) {
          <app-card 
            [icon]="item.icon" 
            [label]="item.label" 
            (cardClick)="onModuleClick(item.id)">
          </app-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .dashboard-page {
      padding: 50px 20px;
      display: flex;
      justify-content: center;
      min-height: calc(100vh - 50px);
      background-color: #f5f5f5;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      max-width: 1000px;
      align-content: center;
    }

    @media (max-width: 768px) {
      .card-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }
      .dashboard-page {
        padding: 30px 15px;
      }
    }

    @media (max-width: 480px) {
      .card-grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }
    }
  `],
  standalone: false
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
