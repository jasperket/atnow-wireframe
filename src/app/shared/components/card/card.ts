import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.css',
  imports: [LucideAngularModule],
})
export class CardComponent {
  @Input() icon?: string;
  @Input() label: string = '';
  @Output() cardClick = new EventEmitter<void>();
}
