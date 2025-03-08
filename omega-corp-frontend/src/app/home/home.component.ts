import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { renovation_photos, electric_photos, concrete_photos } from '../photos/photos';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

  showRenovations: boolean = false;
  showElectric: boolean = false;
  showConcrete: boolean = false;
  renovation_photos: any[] = [];
  electric_photos: any[] = [];
  concrete_photos: any[] = [];

  constructor() { }

  ngOnInit() {
    this.renovation_photos = this.getRenovationPhotos();
    this.electric_photos = this.getElectricPhotos();
    this.concrete_photos = this.getConcretePhotos();
    this.preloadImages();
  }

  toggleRenovations() {
    console.log('toggling renovations');
    this.showRenovations = !this.showRenovations;
  }

  toggleElectric() {
    console.log('toggling electric');
    this.showElectric = !this.showElectric;
  }

  toggleConcrete() {
    console.log('toggling concrete');
    this.showConcrete = !this.showConcrete;
  }

  getRenovationPhotos() {
    return renovation_photos
  }

  getElectricPhotos() {
    return electric_photos
  }

  getConcretePhotos() {
    return concrete_photos
  }

  preloadImages() {
    const allPhotos = [...this.renovation_photos, ...this.electric_photos, ...this.concrete_photos];
    allPhotos.forEach(project => {
      project.slice(1).forEach((photo: string) => {
        const img = new Image();
        img.src = photo;
      });
    });
  }
}
