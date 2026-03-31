import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <dx-toolbar class="header-toolbar">
      <dxi-item location="before">
        <div *dxTemplate class="header-item">
          <button class="home-button" routerLink="/dashboard">
            <lucide-icon name="home" class="home-icon" [size]="36" color="#333"></lucide-icon>
          </button>
        </div>
      </dxi-item>

      <dxi-item location="after">
        <div *dxTemplate class="header-item">
          <div class="user-info" routerLink="/login">
            <div class="user-avatar text-black">
              <lucide-icon name="circle-user" [size]="36" color="#000"></lucide-icon>
            </div>
            <span class="user-name">System Administrator</span>
          </div>
        </div>
      </dxi-item>
    </dx-toolbar>
  `,
  styles: [`
    ::ng-deep .header-toolbar {
      width: 100%;
      height: 50px;
      background: linear-gradient(90deg, #0ba3ac 0%, #76ca62 100%);
      padding: 0 15px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      color: white; /* For dropdowns if utilized */
    }

    ::ng-deep .header-toolbar .dx-toolbar-items-container {
      height: 100%;
    }

    ::ng-deep .header-toolbar .dx-toolbar-item {
      display: flex; /* Force dev-extreme wrapper to flex */
      align-items: center;
      height: 100%;
    }

    .header-item {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .home-button {
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 4px;
      transition: background 0.3s;
    }

    .home-button:hover {
      background: rgba(255,255,255,0.2);
    }

    .user-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      cursor: pointer;
    }

    .user-avatar {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .user-name {
      color: #000;
      font-size: 10px;
      font-weight: 600;
      line-height: 1;
    }

    .text-black {
      color: #000;
    }

    .home-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `],
  standalone: false
})
export class HeaderComponent { }
