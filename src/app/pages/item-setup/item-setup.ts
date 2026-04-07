import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, HostListener } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { MasterEntryLayoutComponent } from '../../shared/layouts/master-entry/master-entry.layout';
import { DxButtonComponent, DxDataGridComponent, DxFormComponent } from 'devextreme-angular';
import {
  DxoSelectionComponent,
  DxoPagingComponent,
  DxiColumnComponent,
  DxiItemComponent,
  DxiValidationRuleComponent,
} from 'devextreme-angular/ui/nested';

@Component({
  selector: 'app-item-setup',
  templateUrl: './item-setup.html',
  styleUrls: ['./item-setup.css'],
  standalone: true,
  imports: [
    MasterEntryLayoutComponent,
    DxButtonComponent,
    DxDataGridComponent,
    DxoSelectionComponent,
    DxoPagingComponent,
    DxiColumnComponent,
    DxFormComponent,
    DxiItemComponent,
    DxiValidationRuleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemSetup implements OnInit {
  items: any[] = [];
  selectedItem: any = null;
  isReadOnly: boolean = true;
  isMobile: boolean = false;
  private STORAGE_KEY = 'item_setup_data';

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.checkScreenSize();
    const defaultData = [
      {
        id: 1,
        itemCode: 'ITM-001',
        itemName: 'Laptop Proc',
        specs: 'Intel i7 16GB',
        unit: 'PCS',
        forTrading: true,
        label1: 'Standard',
        label2: 'IT',
      },
      {
        id: 2,
        itemCode: 'ITM-002',
        itemName: 'Wireless Mouse',
        specs: 'Bluetooth 5.0',
        unit: 'PCS',
        forTrading: true,
        label1: 'Accessory',
        label2: 'Peripherals',
      },
      {
        id: 3,
        itemCode: 'ITM-003',
        itemName: 'Office Chair',
        specs: 'Ergonomic Black',
        unit: 'PCS',
        forTrading: false,
        label1: 'Furniture',
        label2: 'Office',
      },
    ];

    this.items = this.storageService.getData(this.STORAGE_KEY, defaultData);
    if (this.items.length > 0) {
      this.selectedItem = { ...this.items[0] };
    }
  }

  onSelectionChanged(e: any) {
    if (e.selectedRowsData.length > 0) {
      this.selectedItem = { ...e.selectedRowsData[0] };
      this.isReadOnly = true;
    } else {
      this.selectedItem = null;
    }
  }

  onNew() {
    this.selectedItem = {
      id: 0,
      itemCode: '',
      itemName: '',
      specs: '',
      unit: 'PCS',
      forTrading: false,
      label1: '',
      label2: '',
    };
    this.isReadOnly = false;
  }

  onEdit() {
    this.isReadOnly = false;
  }

  onSave() {
    if (!this.selectedItem) return;

    if (this.selectedItem.id === 0) {
      this.selectedItem.id = this.storageService.getNextId(this.STORAGE_KEY);
      this.items.push(this.selectedItem);
    } else {
      const index = this.items.findIndex((i) => i.id === this.selectedItem.id);
      if (index !== -1) {
        this.items[index] = { ...this.selectedItem };
      }
    }

    this.storageService.setData(this.STORAGE_KEY, this.items);
    this.isReadOnly = true;
    this.items = [...this.items];
  }

  onDelete() {
    if (!this.selectedItem || this.selectedItem.id === 0) return;

    this.items = this.items.filter((i) => i.id !== this.selectedItem.id);
    this.storageService.setData(this.STORAGE_KEY, this.items);

    if (this.items.length > 0) {
      this.selectedItem = { ...this.items[0] };
    } else {
      this.selectedItem = null;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
}
