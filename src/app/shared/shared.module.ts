import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { 
  DxButtonModule, 
  DxTextBoxModule, 
  DxSelectBoxModule, 
  DxToolbarModule, 
  DxDataGridModule, 
  DxDateBoxModule, 
  DxFormModule, 
  DxCheckBoxModule, 
  DxSplitterModule,
  DxPopupModule,
  DxTemplateModule
} from 'devextreme-angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

import { ListEntryLayoutComponent } from './layouts/list-entry/list-entry.layout';
import { MasterEntryLayoutComponent } from './layouts/master-entry/master-entry.layout';
import { MasterDetailEntryLayoutComponent } from './layouts/master-detail-entry/master-detail-entry.layout';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ListEntryLayoutComponent,
    MasterEntryLayoutComponent,
    MasterDetailEntryLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxToolbarModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxFormModule,
    DxCheckBoxModule,
    DxSplitterModule,
    DxPopupModule,
    DxTemplateModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxToolbarModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxFormModule,
    DxCheckBoxModule,
    DxSplitterModule,
    DxPopupModule,
    DxTemplateModule,
    HeaderComponent,
    CardComponent,
    ListEntryLayoutComponent,
    MasterEntryLayoutComponent,
    MasterDetailEntryLayoutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
