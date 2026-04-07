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

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent
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
    CardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
