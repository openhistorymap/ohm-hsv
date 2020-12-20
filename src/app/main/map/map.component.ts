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
  @Output() moveend: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lybW1vIiwiYSI6ImNpbGY4cmlrbTAwMmh3Z200eGpqcTlyZGgifQ.zLmK4VAZtCUZBpR_GCdytw';
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: [11.34359240476931, 44.49484685252506], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });
    
    this.map.on('moveend', () => {
      const c = this.map.getCenter();
      const z = this.map.getZoom();
      this.moveend.emit({lng: c.lng, lat: c.lat, zoom: z});
    });

    this.map.on('load', () => {
      
          this.map.addSource('pics', {
            type: 'vector',
            tiles: [
              'http://51.15.160.236:9055/1866/{z}/{x}/{y}/vector.pbf'
            ],
            'minzoom': 6,
            'maxzoom': 14
          });
      
          this.map.addLayer({
              'id': 'pics-dots',
              'source': 'pics',
              'source-layer':'pics',
              'type': 'circle',
              'layout': {},
              'paint': {
                'circle-color': '#f08',
                'circle-opacity': 0.4
              }
          });

          this.map.on('mouseenter', 'pics-dots', () => {
            this.map.getCanvas().style.cursor = 'pointer';
          });
            
          // Change it back to a pointer when it leaves.
          this.map.on('mouseleave', 'pics-dots', () => {
            this.map.getCanvas().style.cursor = '';
          });

          this.map.on('click', 'pics-dots', (e) => {
            this.itemSelected.emit(e.features[0]);
          });

    })
  }

}
