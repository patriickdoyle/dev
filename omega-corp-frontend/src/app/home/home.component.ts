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
  // photos = [
  //   "assets/omega-corp-images/highland-ave.jpg",
  //   "assets/omega-corp-images/marywatersford-road.jpg",
  //   "assets/omega-corp-images/rockland-ave.jpg",
  //   "assets/omega-corp-images/levering-124-after-kitchen.jpg",
  //   "assets/omega-corp-images/levering-124-before.JPG",
  //   "assets/omega-corp-images/levering-132-after.jpg",
  //   "assets/omega-corp-images/levering-132-after-inside.jpg",
  //   "assets/omega-corp-images/levering-132-before.jpg",
  //   "assets/omega-corp-images/silverwood-back.jpg",
  //   "assets/omega-corp-images/silverwood.jpg",
  //   "assets/omega-corp-images/pittsburgh-bridge.jpg",
  //   "assets/omega-corp-images/brunswick.jpg",
  //   "assets/omega-corp-images/carroll-street.jpg",
  //   "assets/omega-corp-images/caton-electric.jpg",
  //   "assets/omega-corp-images/clarendon-road.jpg",
  //   "assets/omega-corp-images/clinton-park.jpg",
  //   "assets/omega-corp-images/dover-airforce-electric.jpg",
  //   "assets/omega-corp-images/harrison-woods-sidewalk.jpg",
  //   "assets/omega-corp-images/kiddos-before-entrance.jpg",
  //   "assets/omega-corp-images/kiddos-before-door.jpg",
  //   "assets/omega-corp-images/kiddos-before-inside.jpg",
  //   "assets/omega-corp-images/roma-park-masonry.jpg",
  //   "assets/omega-corp-images/trenton-airforce.jpg",
  //   "assets/omega-corp-images/levering-124-beforeandafter.JPG",
  //   "assets/omega-corp-images/boone-street-after.jpg",
  //   "assets/omega-corp-images/kiddos-bar.jpg",
  //   "assets/omega-corp-images/kiddos-after-door.jpg",
  //   "assets/omega-corp-images/kiddos-after-windows.jpg",
  //   "assets/omega-corp-images/clayton-sidewalk.jpg"
  // ];

  highland_photos = [
    "Highland Project", 
    "assets/omega-corp-images/highland-ave.jpg",
  ]
  marywatersford_photos = [
    "Marywatersford Project",
    "assets/omega-corp-images/marywatersford-road.jpg",
  ]
  rockland_photos = [
    "Rockland Project", 
    "assets/omega-corp-images/rockland-ave.jpg",
  ]
  levering124_photos = [
    "Levering Project 1",
    "assets/omega-corp-images/levering-124-after-kitchen.jpg",
    "assets/omega-corp-images/levering-124-before.JPG",
    "assets/omega-corp-images/levering-124-beforeandafter.JPG",
  ]
  levering132_photos = [
    "Levering Project 2",
    "assets/omega-corp-images/levering-132-after.jpg",
    "assets/omega-corp-images/levering-132-after-inside.jpg",
    "assets/omega-corp-images/levering-132-before.jpg",
  ]
  silverwood_photos = [
    "Silverwood Project",
    "assets/omega-corp-images/silverwood-back.jpg",
    "assets/omega-corp-images/silverwood.jpg",
  ]
  pittsburgh_bridge_photos = [
    "Pittsburgh Bridge Project",
     "assets/omega-corp-images/pittsburgh-bridge.jpg",
    ]
  brunswick_photos = [
    "Brunswick Project", 
    "assets/omega-corp-images/brunswick.jpg",
  ]
  carroll_street_photos = [
    "Carroll Project", 
    "assets/omega-corp-images/carroll-street.jpg",
  ]
  caton_electric_photos = [
    "Caton Project", 
    "assets/omega-corp-images/caton-electric.jpg",
  ]
  clarendon_road_photos = [
    "Clarendon Project", 
    "assets/omega-corp-images/clarendon-road.jpg",
  ]
  clinton_park_photos = [
    "Clinton Park Project", 
    "assets/omega-corp-images/clinton-park.jpg",
  ]
  dover_airforce_electric_photos = [
    "Dover Airforce Project", 
    "assets/omega-corp-images/dover-airforce-electric.jpg",
  ]
  harrison_woods_sidewalk_photos = [
    "Harrison Woods Project", 
    "assets/omega-corp-images/harrison-woods-sidewalk.jpg",
  ]
  kiddos_photos = [
    "Kiddos Project",
    "assets/omega-corp-images/kiddos-before-entrance.jpg",
    "assets/omega-corp-images/kiddos-before-door.jpg",
    "assets/omega-corp-images/kiddos-before-inside.jpg",
    "assets/omega-corp-images/kiddos-bar.jpg",
    "assets/omega-corp-images/kiddos-after-door.jpg",
    "assets/omega-corp-images/kiddos-after-windows.jpg",
  ]
  roma_park_masonry_photos = [
    "Roma Park Project", 
    "assets/omega-corp-images/roma-park-masonry.jpg",
  ]
  trenton_airforce_photos = [
    "Trenton Airforce Project", 
    "assets/omega-corp-images/trenton-airforce.jpg",
  ]
  boone_street_photos = [
    "Boone Street Project", 
    "assets/omega-corp-images/boone-street-after.jpg",
  ]
  clayton_sidewalk_photos = [
    "Clayton Sidewalk Project", 
    "assets/omega-corp-images/clayton-sidewalk.jpg",
  ]

  renovation_photos: string [][] = [
    this.boone_street_photos,
    this.brunswick_photos,
    this.carroll_street_photos,
    this.clarendon_road_photos,
    this.clinton_park_photos,
    this.highland_photos,
    this.kiddos_photos,
    this.levering124_photos,
    this.levering132_photos,
    this.marywatersford_photos,
    this.rockland_photos,
    this.silverwood_photos
  ]


  electric_photos: string[][] = [
    this.caton_electric_photos,
    this.dover_airforce_electric_photos,

  ]

  concrete_photos: string[][] = [
    this.clayton_sidewalk_photos,
    this.harrison_woods_sidewalk_photos,
    this.pittsburgh_bridge_photos,
    this.roma_park_masonry_photos,
    this.trenton_airforce_photos
  ]

  all_photos = [
    this.renovation_photos,
    this.electric_photos,
    this.concrete_photos
  ]

  ngOnInit() {
    for (let project of this.renovation_photos) {
      console.log(project[0]);
      this.openModal(project[1]);
    }
  }

  openModal(photo: string) {
    console.log("openModal")
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01") as HTMLImageElement;
    const captionText = document.getElementById("caption");

    if (modal && modalImg && captionText) {
      modal.style.display = "block";
      modalImg.src = photo;
      captionText.innerHTML = photo;
    }
  }

  closeModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  }

}
