import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-btn',
  imports: [],
  templateUrl: './reuse-btn.component.html',
  styleUrl: './reuse-btn.component.css'
})
export class ReuseBtnComponent {
  @Input() text: String | undefined;
  @Input() btnClass: String | undefined;
}
