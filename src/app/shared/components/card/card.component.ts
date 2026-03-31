import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card-wrapper" [class.no-icon]="!icon" (click)="cardClick.emit()">
      <div class="card-content">
        @if (icon) {
          <lucide-icon [name]="icon" [size]="48" class="card-icon" color="#0ba3ac"></lucide-icon>
        }
        <span class="card-label">{{ label }}</span>
      </div>
    </div>
  `,
  styles: [`
    .card-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 2px; /* For gradient border effect */
      background: linear-gradient(135deg, #0ba3ac 0%, #76ca62 100%);
      border-radius: 20px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .card-wrapper:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .card-content {
      background: #fff;
      border-radius: 18px;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 15px;
      padding: 15px 20px;
    }

    .no-icon .card-content {
      justify-content: center;
    }

    .card-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0ba3ac;
    }

    .card-label {
      color: #333;
      font-size: 16px;
      font-weight: 500;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      .card-content {
        padding: 10px 15px;
        gap: 10px;
      }
      .card-label {
        font-size: 12px;
      }
      .card-icon {
        width: 30px;
        height: 30px;
      }
    }
  `],
  standalone: false
})
export class CardComponent {
  @Input() icon?: string;
  @Input() label: string = '';
  @Output() cardClick = new EventEmitter<void>();
}
