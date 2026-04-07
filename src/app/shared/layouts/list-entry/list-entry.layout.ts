import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-entry-layout',
  templateUrl: './list-entry.layout.html',
  standalone: false
})
export class ListEntryLayoutComponent {
  @Input() showBackButton: boolean = true;
  
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
