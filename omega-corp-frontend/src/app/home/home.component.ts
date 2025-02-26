import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {
  photos = [
    "assets/omega-corp-images/1.jpg",
    "assets/omega-corp-images/2.jpg",
    "assets/omega-corp-images/3.jpg",
    "assets/omega-corp-images/4.jpg",
    "assets/omega-corp-images/5.JPG",
    "assets/omega-corp-images/6.jpg",
    "assets/omega-corp-images/7.jpg",
    "assets/omega-corp-images/8.jpg",
    "assets/omega-corp-images/9.jpg",
    "assets/omega-corp-images/10.jpg",
    "assets/omega-corp-images/11.jpg",
    "assets/omega-corp-images/12.jpg",
    "assets/omega-corp-images/13.jpg",
    "assets/omega-corp-images/14.jpg",
    "assets/omega-corp-images/15.jpg",
    "assets/omega-corp-images/16.jpg",
    "assets/omega-corp-images/17.jpg",
    "assets/omega-corp-images/18.jpg",
    "assets/omega-corp-images/19.jpg",
    "assets/omega-corp-images/20.jpg",
    "assets/omega-corp-images/21.jpg",
    "assets/omega-corp-images/22.jpg",
    "assets/omega-corp-images/23.jpg",
    "assets/omega-corp-images/24.JPG",
    "assets/omega-corp-images/25.jpg",
    "assets/omega-corp-images/26.jpg",
    "assets/omega-corp-images/27.jpg",
    "assets/omega-corp-images/28.jpg",
    "assets/omega-corp-images/29.jpg",
    "assets/omega-corp-images/30.jpg"
  ];

}
