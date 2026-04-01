import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-po-approval',
  templateUrl: './po-approval.html',
  styleUrls: ['./po-approval.css'],
  standalone: false
})
export class PoApproval implements OnInit {
  purchaseOrders: any[] = [];
  
  ngOnInit() {
    this.purchaseOrders = [
      { id: 1, orderNo: 'ORD-0001', supplier: 'Supplier A', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 2, orderNo: 'ORD-0002', supplier: 'Supplier B', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 3, orderNo: 'ORD-0003', supplier: 'Supplier A', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 4, orderNo: 'ORD-0004', supplier: 'Supplier C', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 5, orderNo: 'ORD-0005', supplier: 'Supplier C', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 6, orderNo: 'ORD-0006', supplier: 'Supplier A', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
    ];
  }
}
