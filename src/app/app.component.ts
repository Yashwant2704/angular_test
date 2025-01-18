import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'first-angular-app';
  ngOnInit() {
    // Simulate a loading delay (for testing purposes only)
    setTimeout(() => {
      const splashScreen = document.getElementById('splash-screen');
      if (splashScreen) {
        splashScreen.classList.add('hidden');
      }
    }, 1000); // Simulates 3 seconds of loading time
  }
}
