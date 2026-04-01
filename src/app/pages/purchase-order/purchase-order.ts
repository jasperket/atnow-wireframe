import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.html',
  styleUrls: ['./purchase-order.css'],
  standalone: false
})
export class PurchaseOrder implements OnInit {
  orders: any[] = [];
  selectedOrder: any = null;
  lineItems: any[] = [];

  ngOnInit() {
    this.orders = [
      { id: 1, orderNo: 'ORD-1001', supplier: 'Tech Corp', amount: 15000, orderDate: '02/10/2026', poNumber: 'New Order', supplierName: 'Tech Corporation Ltd.', reviewer1: 'Alice', reviewer2: 'Bob', approver: 'Charlie' },
      { id: 2, orderNo: 'ORD-1002', supplier: 'Office Supplies Inc', amount: 500, orderDate: '02/11/2026', poNumber: 'ORD-1002', supplierName: 'Office Supplies Inc', reviewer1: 'Dave', reviewer2: '', approver: 'Eve' },
    ];

    this.lineItems = [
      { id: 1, itemNo: 1, item: 'Laptop Pro 15"', unit: 'PCS', unitPrice: 1500, taxCode: 'P-VAT', qty: 10, amount: 15000 },
      { id: 2, itemNo: 2, item: 'Wireless Mouse', unit: 'PCS', unitPrice: 25, taxCode: 'P-VAT', qty: 50, amount: 1250 },
      { id: 3, itemNo: 3, item: 'Keyboard', unit: 'PCS', unitPrice: 40, taxCode: 'P-VAT', qty: 50, amount: 2000 },
      { id: 4, itemNo: 4, item: 'Monitor 24"', unit: 'PCS', unitPrice: 150, taxCode: 'P-VAT', qty: 10, amount: 1500 },
      { id: 5, itemNo: 5, item: 'HDMI Cable', unit: 'PCS', unitPrice: 10, taxCode: 'P-VAT', qty: 150, amount: 1500 },
      { id: 6, itemNo: 6, item: 'USB-C Dock', unit: 'PCS', unitPrice: 80, taxCode: 'P-VAT', qty: 10, amount: 800 },
    ];
  }

  onSelectionChanged(e: any) {
    if (e.selectedRowsData.length > 0) {
      this.selectedOrder = e.selectedRowsData[0];
    } else {
      this.selectedOrder = null;
    }
  }
}
