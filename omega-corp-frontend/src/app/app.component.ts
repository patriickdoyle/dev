import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';  
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'omega-corp-frontend';
}
