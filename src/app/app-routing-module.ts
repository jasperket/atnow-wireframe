import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ModuleDetailComponent } from './pages/module-detail/module-detail.component';
import { PurchaseOrder } from './pages/purchase-order/purchase-order';
import { PoApproval } from './pages/po-approval/po-approval';
import { ItemSetup } from './pages/item-setup/item-setup';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'module/:name', component: ModuleDetailComponent },
  { path: 'procurement/purchase-order', component: PurchaseOrder },
  { path: 'procurement/item-setup', component: ItemSetup },
  { path: 'procurement/po-approval', component: PoApproval },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
