import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-detail',
  template: `
    <app-header></app-header>
    <div class="module-page">
      <h1 class="module-title">{{ moduleTitle }}</h1>
      
      <div class="card-grid">
        @for (item of subModules; track item.id) {
          <app-card 
            [label]="item.label" 
            (cardClick)="onSubModuleClick(item.id)">
          </app-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .module-page {
      padding: 60px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: calc(100vh - 50px);
      background-color: #fff;
    }

    .module-title {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 60px;
      background: linear-gradient(90deg, #0ba3ac 0%, #76ca62 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 1px;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 200px);
      gap: 30px;
      max-width: 700px;
    }

    @media (max-width: 768px) {
      .card-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }
      .module-title {
        font-size: 32px;
        margin-bottom: 40px;
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
export class ModuleDetailComponent implements OnInit {
  moduleTitle = 'Procurement';
  subModules = [
    { id: 'rfq', label: 'RFQ' },
    { id: 'canvassing', label: 'Supplier Canvassing' },
    { id: 'request', label: 'Purchase Request' },
    { id: 'order', label: 'Purchase Order' },
    { id: 'invoice', label: 'Supplier Invoice' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.moduleTitle = name.charAt(0).toUpperCase() + name.slice(1);
    }
  }

  onSubModuleClick(id: string) {
    console.log('Sub-module clicked:', id);
  }
}
