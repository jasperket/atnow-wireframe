import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import {
  DxToolbarComponent,
  DxButtonComponent,
  DxTextBoxComponent,
  DxSplitterComponent,
} from 'devextreme-angular';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';

@Component({
  selector: 'master-entry-layout',
  templateUrl: './master-entry.html',
  imports: [
    HeaderComponent,
    DxToolbarComponent,
    DxiItemComponent,
    DxButtonComponent,
    DxTextBoxComponent,
    DxSplitterComponent,
  ],
})
export class MasterEntryLayoutComponent {
  @Input() showBackButton: boolean = true;
  @Input() isMobile: boolean = false;

  // Toolbar item visibility
  @Input() showApprove: boolean = false;
  @Input() showNew: boolean = false;
  @Input() showEdit: boolean = false;
  @Input() showSave: boolean = false;
  @Input() showDelete: boolean = false;
  @Input() showExport: boolean = false;
  @Input() showRefresh: boolean = false;
  @Input() showSearch: boolean = false;
  @Input() showFilter: boolean = false;

  // Toolbar item disable states
  @Input() disableApprove: boolean = false;
  @Input() disableNew: boolean = false;
  @Input() disableEdit: boolean = false;
  @Input() disableSave: boolean = false;
  @Input() disableDelete: boolean = false;
  @Input() disableExport: boolean = false;
  @Input() disableRefresh: boolean = false;

  // Event Emitters
  @Output() approve = new EventEmitter<void>();
  @Output() new = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();
  @Output() refresh = new EventEmitter<void>();
  @Output() filter = new EventEmitter<void>();
}
