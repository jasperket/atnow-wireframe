import { Component, Input } from '@angular/core';
import { DxToolbarComponent } from 'devextreme-angular';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';
import { DxTemplateDirective } from 'devextreme-angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  template: `
    <dx-toolbar
      class="d-flex align-items-center px-4"
      style="height: 50px; background: linear-gradient(90deg, #0ba3ac 0%, #76ca62 100%); color: white; z-index: 1000;"
    >
      <dxi-item location="before">
        <div *dxTemplate class="d-flex align-items-center gap-2">
          <button
            class="btn btn-link p-1 d-flex align-items-center justify-content-center text-decoration-none border-0 hover-opacity"
            routerLink="/dashboard"
          >
            <lucide-icon
              name="home"
              [size]="28"
              color="#333"
              class="d-flex align-items-center justify-content-center"
            ></lucide-icon>
          </button>

          @if (showBackButton) {
            <button
              class="btn btn-link p-1 d-flex align-items-center justify-content-center text-decoration-none border-0 hover-opacity"
              [routerLink]="backRoute"
            >
              <lucide-icon
                name="arrow-left"
                [size]="28"
                color="#333"
                class="d-flex align-items-center justify-content-center"
              ></lucide-icon>
            </button>
          }
        </div>
      </dxi-item>

      <dxi-item location="after">
        <div *dxTemplate class="d-flex align-items-center">
          <div
            class="d-flex flex-row align-items-center gap-2 cursor-pointer text-decoration-none"
            style="cursor: pointer;"
            routerLink="/login"
          >
            <div
              class="d-flex align-items-center justify-content-center"
              style="width: 36px; height: 36px;"
            >
              <lucide-icon name="circle-user" [size]="36" color="#000"></lucide-icon>
            </div>
            <span class="text-dark fw-bold text-nowrap" style="font-size: 14px;"
              >System Administrator</span
            >
          </div>
        </div>
      </dxi-item>
    </dx-toolbar>
  `,
  styles: [
    `
      .hover-opacity {
        transition: background 0.3s;
        background: none;
      }

      .hover-opacity:hover {
        background: rgba(255, 255, 255, 0.2) !important;
      }
    `,
  ],
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
