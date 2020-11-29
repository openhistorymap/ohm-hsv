import { Component, EventEmitter, OnInit, Output } from '@angular/core';

declare const mapboxgl;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lybW1vIiwiYSI6ImNpbGY4cmlrbTAwMmh3Z200eGpqcTlyZGgifQ.zLmK4VAZtCUZBpR_GCdytw';
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
    
  }

}
