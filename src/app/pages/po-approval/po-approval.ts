import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-po-approval',
  templateUrl: './po-approval.html',
  styleUrls: ['./po-approval.css'],
  standalone: false
})
export class PoApproval implements OnInit {
  purchaseOrders: any[] = [];
  isReadOnly: boolean = true;
  private STORAGE_KEY = 'po_approval_data';

  constructor(private storageService: StorageService) {}
  
  ngOnInit() {
    const defaultData = [
      { id: 1, orderNo: 'ORD-0001', supplier: 'Supplier A', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 2, orderNo: 'ORD-0002', supplier: 'Supplier B', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 3, orderNo: 'ORD-0003', supplier: 'Supplier A', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 4, orderNo: 'ORD-0004', supplier: 'Supplier C', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 5, orderNo: 'ORD-0005', supplier: 'Supplier C', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
      { id: 6, orderNo: 'ORD-0006', supplier: 'Supplier A', orderDate: '02/05/2026', orderAmount: 50000.00, preparedBy: 'System Administrator' },
    ];

    this.purchaseOrders = this.storageService.getData(this.STORAGE_KEY, defaultData);
  }

  onEdit() {
    this.isReadOnly = false;
  }

  onNew() {
    const newId = this.storageService.getNextId(this.STORAGE_KEY);
    const newOrder = {
      id: newId,
      orderNo: `ORD-${1000 + newId}`,
      supplier: 'New Supplier',
      orderDate: new Date().toLocaleDateString(),
      orderAmount: 0.00,
      preparedBy: 'System Administrator'
    };
    this.purchaseOrders = [...this.purchaseOrders, newOrder];
    this.isReadOnly = false;
  }

  onApprove() {
    this.storageService.setData(this.STORAGE_KEY, this.purchaseOrders);
    this.isReadOnly = true;
  }

  onDelete() {
    // Multi-delete for selected rows (assuming 'selected' property exists or similar)
    // For simplicity, let's filter out anything selected.
    this.purchaseOrders = this.purchaseOrders.filter(po => !po.selected); 
    this.storageService.setData(this.STORAGE_KEY, this.purchaseOrders);
  }
}
