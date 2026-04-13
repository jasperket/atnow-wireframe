import { Component, Input } from '@angular/core';
import { DxToolbarComponent } from 'devextreme-angular';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';
import { DxTemplateDirective } from 'devextreme-angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
  imports: [
    DxToolbarComponent,
    DxiItemComponent,
    DxTemplateDirective,
    RouterLink,
    LucideAngularModule,
  ],
})
export class HeaderComponent {
  @Input() showBackButton: boolean = false;
  @Input() backRoute: string = '/module/procurement';
}
