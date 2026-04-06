import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card-wrapper w-100 h-100 p-1 position-relative" [class.justify-content-center]="!icon" (click)="cardClick.emit()" style="background: linear-gradient(135deg, #0ba3ac 0%, #76ca62 100%); border-radius: 20px; cursor: pointer;">
      <div class="d-flex flex-row align-items-center h-100 bg-white p-2 p-md-3 gap-2 gap-md-3" [class.justify-content-center]="!icon" [class.justify-content-start]="icon" style="border-radius: 18px;">
        @if (icon) {
          <div class="d-flex align-items-center justify-content-center" style="width: 48px; min-width: 48px; height: 48px; color: #0ba3ac;">
            <lucide-icon [name]="icon" [size]="48"></lucide-icon>
          </div>
        }
        <span class="text-dark fw-medium text-nowrap fs-6">{{ label }}</span>
      </div>
    </div>
  `,
  styles: [`
    .card-wrapper {
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .card-wrapper:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
  `],
  standalone: false
})
export class CardComponent {
  @Input() icon?: string;
  @Input() label: string = '';
  @Output() cardClick = new EventEmitter<void>();
}
