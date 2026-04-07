import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-header></app-header>
    <div
      class="d-flex justify-content-center bg-light"
      style="min-height: calc(100vh - 50px); padding: 50px 20px;"
    >
      <div class="row w-100 justify-content-center" style="max-width: 1000px;">
        @for (item of modules; track item.id) {
          <div class="col-12 col-sm-6 col-md-4 mb-4">
            <app-card [icon]="item.icon" [label]="item.label" (cardClick)="onModuleClick(item.id)">
            </app-card>
          </div>
        }
      </div>
    </div>
  `,
  styles: [],
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
