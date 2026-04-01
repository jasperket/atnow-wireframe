import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ModuleDetailComponent } from './pages/module-detail/module-detail.component';
import {
  LucideAngularModule,
  LUCIDE_ICONS,
  LucideIconProvider,
  Home,
  CircleUser,
  Users,
  Coins,
  ClipboardList,
  TrendingUp,
  Boxes,
  Factory,
  FolderOpen,
  LineChart,
  UserCog,
  ArrowLeft,
} from 'lucide-angular';
import { PurchaseOrder } from './pages/purchase-order/purchase-order';
import { PoApproval } from './pages/po-approval/po-approval';
import { ItemSetup } from './pages/item-setup/item-setup';

const icons = {
  Home,
  CircleUser,
  Users,
  Coins,
  ClipboardList,
  TrendingUp,
  Boxes,
  Factory,
  FolderOpen,
  LineChart,
  UserCog,
  ArrowLeft,
};

@NgModule({
  declarations: [
    App,
    LoginComponent,
    DashboardComponent,
    ModuleDetailComponent,
    PurchaseOrder,
    PoApproval,
    ItemSetup,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, LucideAngularModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
