import { NgModule, CUSTOM_ELEMENTS_SCHEMA, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ModuleDetailComponent } from './pages/module-detail/module-detail.component';
import { LucideAngularModule, LUCIDE_ICONS, LucideIconProvider, Home, CircleUser, Users, Coins, ClipboardList, TrendingUp, Boxes, Factory, FolderOpen, LineChart, UserCog } from 'lucide-angular';

const icons = { Home, CircleUser, Users, Coins, ClipboardList, TrendingUp, Boxes, Factory, FolderOpen, LineChart, UserCog };

@NgModule({
  declarations: [
    App,
    LoginComponent,
    DashboardComponent,
    ModuleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LucideAngularModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons)
    }
  ],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
