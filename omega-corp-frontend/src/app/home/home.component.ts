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
    "assets/omega-corp-images/highland-ave.jpg",
    "assets/omega-corp-images/marywatersford-road.jpg",
    "assets/omega-corp-images/rockland-ave.jpg",
    "assets/omega-corp-images/levering-124-after-kitchen.jpg",
    "assets/omega-corp-images/levering-124-before.JPG",
    "assets/omega-corp-images/levering-132-after.jpg",
    "assets/omega-corp-images/levering-132-after-inside.jpg",
    "assets/omega-corp-images/levering-132-before.jpg",
    "assets/omega-corp-images/silverwood-back.jpg",
    "assets/omega-corp-images/silverwood.jpg",
    "assets/omega-corp-images/pittsburgh-bridge.jpg",
    "assets/omega-corp-images/brunswick.jpg",
    "assets/omega-corp-images/carroll-street.jpg",
    "assets/omega-corp-images/caton-electric.jpg",
    "assets/omega-corp-images/clarendon-road.jpg",
    "assets/omega-corp-images/clinton-park.jpg",
    "assets/omega-corp-images/dover-airforce-electric.jpg",
    "assets/omega-corp-images/harrison-woods-sidewalk.jpg",
    "assets/omega-corp-images/kiddos-before-entrance.jpg",
    "assets/omega-corp-images/kiddos-before-door.jpg",
    "assets/omega-corp-images/kiddos-before-inside.jpg",
    "assets/omega-corp-images/roma-park-masonry.jpg",
    "assets/omega-corp-images/trenton-airforce.jpg",
    "assets/omega-corp-images/levering-124-beforeandafter.JPG",
    "assets/omega-corp-images/boone-street-after.jpg",
    "assets/omega-corp-images/kiddos-bar.jpg",
    "assets/omega-corp-images/kiddos-after-door.jpg",
    "assets/omega-corp-images/kiddos-after-windows.jpg",
    "assets/omega-corp-images/clayton-sidewalk.jpg"
  ];

}
