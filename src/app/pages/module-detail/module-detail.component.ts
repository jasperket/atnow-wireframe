import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-module-detail',
  template: `
    <app-header></app-header>
    <div class="d-flex flex-column align-items-center bg-white" style="min-height: calc(100vh - 50px); padding: 60px 20px;">
      <h1 class="fw-bold mb-5 text-center" style="font-size: 42px; background: linear-gradient(90deg, #0ba3ac 0%, #76ca62 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: 1px;">{{ moduleTitle }}</h1>
      
      <div class="row w-100 justify-content-center" style="max-width: 700px;">
        @for (item of subModules; track item.id) {
          <div class="col-12 col-sm-6 col-md-4 mb-4">
            <app-card 
              [label]="item.label" 
              (cardClick)="onSubModuleClick(item.id)">
            </app-card>
          </div>
        }
      </div>
    </div>
  `,
  styles: [],
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.moduleTitle = name.charAt(0).toUpperCase() + name.slice(1);
    }
  }

  onSubModuleClick(id: string) {
    if (this.moduleTitle.toLowerCase() === 'procurement') {
      if (id === 'order') {
        this.router.navigate(['/procurement/purchase-order']);
      } else if (id === 'request') {
        this.router.navigate(['/procurement/item-setup']);
      } else if (id === 'canvassing') {
        this.router.navigate(['/procurement/po-approval']);
      } else {
        console.log('Sub-module clicked:', id);
      }
    } else {
      console.log('Sub-module clicked:', id);
    }
  }
}
