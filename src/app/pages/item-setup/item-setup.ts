import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-setup',
  templateUrl: './item-setup.html',
  styleUrls: ['./item-setup.css'],
  standalone: false
})
export class ItemSetup implements OnInit {
  items: any[] = [];
  selectedItem: any = null;

  ngOnInit() {
    this.items = [
      { id: 1, itemCode: 'ITM-001', itemName: 'Laptop Proc', specs: 'Intel i7 16GB', unit: 'PCS', forTrading: true, label1: 'Standard', label2: 'IT' },
      { id: 2, itemCode: 'ITM-002', itemName: 'Wireless Mouse', specs: 'Bluetooth 5.0', unit: 'PCS', forTrading: true, label1: 'Accessory', label2: 'Peripherals' },
      { id: 3, itemCode: 'ITM-003', itemName: 'Office Chair', specs: 'Ergonomic Black', unit: 'PCS', forTrading: false, label1: 'Furniture', label2: 'Office' },
    ];
  }

  onSelectionChanged(e: any) {
    if (e.selectedRowsData.length > 0) {
      this.selectedItem = e.selectedRowsData[0];
    } else {
      this.selectedItem = null;
    }
  }
}
