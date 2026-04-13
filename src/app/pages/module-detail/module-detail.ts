import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header';
import { CardComponent } from '../../shared/components/card/card';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.html',
  styleUrl: './module-detail.css',
  imports: [HeaderComponent, CardComponent],
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

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
