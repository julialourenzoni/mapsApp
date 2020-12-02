import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: google.maps.Map;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor() {}

  ionViewWillEnter() {
    this.exibirMapa();
  }

  exibirMapa() {
    const posicao = new google.maps.LatLng(-22.500993, -48.707304);
    const opcoes = {
      center: posicao,
      zoom: 15,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);

    new google.maps.Marker({
      position: posicao,
      map: this.map,
      title: "Supermercado",
      animation: google.maps.Animation.BOUNCE
    });
  }

}
