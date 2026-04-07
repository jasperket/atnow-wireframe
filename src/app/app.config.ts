import { ApplicationConfig, provideZonelessChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { 
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
  ArrowLeft
} from 'lucide-angular';

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

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideBrowserGlobalErrorListeners(),
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ]
};
