import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, HostListener } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { MasterDetailEntryLayoutComponent } from '../../shared/layouts/master-detail-entry/master-detail-entry';
import {
  DxButtonComponent,
  DxFormComponent,
  DxDataGridComponent,
  DxPopupComponent,
} from 'devextreme-angular';
import {
  DxiItemComponent,
  DxiValidationRuleComponent,
  DxoEditingComponent,
  DxiColumnComponent,
  DxoSelectionComponent,
} from 'devextreme-angular/ui/nested';
import { NgTemplateOutlet, CurrencyPipe } from '@angular/common';
import { DxiToolbarItemComponent } from 'devextreme-angular/ui/toolbar/nested';
import { DxTemplateDirective } from 'devextreme-angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.html',
  styleUrls: ['./purchase-order.css'],
  standalone: true,
  imports: [
    MasterDetailEntryLayoutComponent,
    DxButtonComponent,
    DxFormComponent,
    DxiItemComponent,
    DxiValidationRuleComponent,
    DxDataGridComponent,
    DxoEditingComponent,
    DxiColumnComponent,
    DxoSelectionComponent,
    NgTemplateOutlet,
    DxPopupComponent,
    DxiToolbarItemComponent,
    DxTemplateDirective,
    CurrencyPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PurchaseOrder implements OnInit {
  orders: any[] = [];
  selectedOrder: any = null;
  lineItems: any[] = [];

  isReadOnly: boolean = true;
  isLineItemsReadOnly: boolean = true;

  isMobile: boolean = false;
  isPopupVisible: boolean = false;

  private STORAGE_KEY = 'purchase_orders';

  editButtonOptions = {
    icon: 'edit',
    text: 'EDIT',
    stylingMode: 'text',
    onClick: () => this.onEdit(),
  };

  saveButtonOptions = {
    icon: 'save',
    text: 'SAVE',
    stylingMode: 'text',
    onClick: () => this.onSave(),
  };

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.checkScreenSize();
    const defaultOrders = [
      {
        id: 1,
        orderNo: 'ORD-1001',
        supplier: 'Tech Corp',
        amount: 15000,
        orderDate: '02/10/2026',
        poNumber: 'New Order',
        supplierName: 'Tech Corporation Ltd.',
        reviewer1: 'Alice',
        reviewer2: 'Bob',
        approver: 'Charlie',
        lineItems: [
          {
            id: 1,
            itemNo: 1,
            item: 'Laptop Pro 15"',
            unit: 'PCS',
            unitPrice: 1500,
            taxCode: 'P-VAT',
            qty: 10,
            amount: 15000,
          },
          {
            id: 2,
            itemNo: 2,
            item: 'Wireless Mouse',
            unit: 'PCS',
            unitPrice: 25,
            taxCode: 'P-VAT',
            qty: 50,
            amount: 1250,
          },
        ],
      },
      {
        id: 2,
        orderNo: 'ORD-1002',
        supplier: 'Office Supplies Inc',
        amount: 500,
        orderDate: '02/11/2026',
        poNumber: 'ORD-1002',
        supplierName: 'Office Supplies Inc',
        reviewer1: 'Dave',
        reviewer2: '',
        approver: 'Eve',
        lineItems: [],
      },
    ];

    this.orders = this.storageService.getData(this.STORAGE_KEY, defaultOrders);
    if (this.orders.length > 0) {
      this.selectedOrder = { ...this.orders[0] };
      this.lineItems = [...(this.selectedOrder.lineItems || [])];
    }
  }

  onSelectionChanged(e: any) {
    if (e.selectedRowsData.length > 0) {
      this.selectedOrder = { ...e.selectedRowsData[0] };
      this.lineItems = [...(this.selectedOrder.lineItems || [])];
      this.isReadOnly = true;
      this.isLineItemsReadOnly = true;
    } else {
      this.selectedOrder = null;
      this.lineItems = [];
    }
  }

  onRowClick(e: any) {
    if (this.isMobile && e.data) {
      this.isPopupVisible = true;
    }
  }

  onNew() {
    this.selectedOrder = {
      id: 0,
      orderNo: '',
      supplier: '',
      amount: 0,
      orderDate: new Date().toLocaleDateString(),
      poNumber: '',
      supplierName: '',
      reviewer1: '',
      reviewer2: '',
      approver: '',
      lineItems: [],
    };
    this.lineItems = [];
    this.isReadOnly = false;
    this.isLineItemsReadOnly = false;
    if (this.isMobile) {
      this.isPopupVisible = true;
    }
  }

  onEdit() {
    this.isReadOnly = false;
  }

  onSave() {
    if (!this.selectedOrder) return;

    // Update amount based on line items
    this.selectedOrder.amount = this.lineItems.reduce((sum, item) => sum + (item.amount || 0), 0);
    this.selectedOrder.lineItems = [...this.lineItems];

    if (this.selectedOrder.id === 0) {
      this.selectedOrder.id = this.storageService.getNextId(this.STORAGE_KEY);
      this.selectedOrder.orderNo = `ORD-${1000 + this.selectedOrder.id}`;
      this.orders.push(this.selectedOrder);
    } else {
      const index = this.orders.findIndex((o) => o.id === this.selectedOrder.id);
      if (index !== -1) {
        this.orders[index] = { ...this.selectedOrder };
      }
    }

    this.storageService.setData(this.STORAGE_KEY, this.orders);
    this.isReadOnly = true;
    this.isLineItemsReadOnly = true;

    // Refresh list (needed if reference changed)
    this.orders = [...this.orders];
  }

  onDelete() {
    if (!this.selectedOrder || this.selectedOrder.id === 0) return;

    this.orders = this.orders.filter((o) => o.id !== this.selectedOrder.id);
    this.storageService.setData(this.STORAGE_KEY, this.orders);

    if (this.orders.length > 0) {
      this.selectedOrder = { ...this.orders[0] };
      this.lineItems = [...(this.selectedOrder.lineItems || [])];
    } else {
      this.selectedOrder = null;
      this.lineItems = [];
    }
  }

  // Line Items Actions
  onEditLineItems() {
    this.isLineItemsReadOnly = false;
  }

  onNewLineItem() {
    const newItem = {
      id: Date.now(), // Local temporary ID for grid or use counter if preferred
      itemNo: this.lineItems.length + 1,
      item: '',
      unit: 'PCS',
      unitPrice: 0,
      taxCode: 'P-VAT',
      qty: 1,
      amount: 0,
    };
    this.lineItems = [...this.lineItems, newItem];
    this.isLineItemsReadOnly = false;
  }

  onDeleteLineItem() {
    // This is often handled by grid selection or just removing the last/selected one
    // For simplicity, let's assume we remove the last one if no selection is passed,
    // but better would be a specific row delete.
    // I'll add a placeholder that can be triggered by a delete button in the grid or above.
    if (this.lineItems.length > 0) {
      this.lineItems.pop();
      this.lineItems = [...this.lineItems];
    }
  }

  onRowUpdated(e: any) {
    // DevExtreme grid event to update amount
    e.data.amount = e.data.qty * e.data.unitPrice;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
}
