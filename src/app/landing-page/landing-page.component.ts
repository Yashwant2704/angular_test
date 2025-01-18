import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReuseBtnComponent } from "../components/reuse-btn/reuse-btn.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReuseBtnComponent],
})
export class LandingPageComponent {
  
}
