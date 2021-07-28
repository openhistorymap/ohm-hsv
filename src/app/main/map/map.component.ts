import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare const mapboxgl;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map;

  @Input() atDate = 1955;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() moveend: EventEmitter<any> = new EventEmitter<any>();
  featureId;
  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lybW1vIiwiYSI6ImNpbGY4cmlrbTAwMmh3Z200eGpqcTlyZGgifQ.zLmK4VAZtCUZBpR_GCdytw';
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: [4.406654828285127, 50.84512821447697], // starting position [lng, lat]
      zoom: 14, // starting zoom,
      transformRequest: (url, resourceType) => {
        return {
          url: url.replace('{atDate}', this.atDate?this.atDate.toString():1955)
        }
      }
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
              'http://51.15.160.236:9055/{atDate}/{z}/{x}/{y}/vector.pbf'
            ],
            'minzoom': 1,
            'maxzoom': 25
          });
      
          this.map.addLayer({
            'id': 'pics-dots',
            'source': 'pics',
            'source-layer':'pics',
            'type': 'circle',
            'layout': {},
            'paint': {
              'circle-radius': [
                'case',
                ['boolean',
                  ['feature-state', 'hover'],
                  false
                ],5,3],
              'circle-color': [
                "match", ["get", "media_type"],
                "photo", '#111',
                "painting", "#d36e70",
                "#111"],
              'circle-opacity': 0.7
            }
        });

        this.map.addLayer({
            'filter': ['>=', ['zoom'], 13],
            'id': 'pics-dir',
            'source': 'pics',
            'source-layer':'pics',
            'type': 'symbol',
            'layout': {
              'icon-image':'campsite-15',
              'icon-allow-overlap':true,
              
              'icon-rotate':["+", 0,["get", "direction" ]],
            }
        }, 'pics-dots');

          this.map.on('mouseenter', 'pics-dots', () => {
            this.map.getCanvas().style.cursor = 'pointer';
          });
            
          // Change it back to a pointer when it leaves.
          this.map.on('mouseleave', 'pics-dots', () => {
            this.map.getCanvas().style.cursor = '';
          });

          this.map.on('click', 'pics-dots', (e) => {
            console.log(e.features[0]);
                    
            this.featureId = e.features[0].id;

            // When the mouse moves over the earthquakes-viz layer, update the
            // feature state for the feature under the mouse
            this.map.setFeatureState({
              source: 'pics-dots',
              id: this.featureId,
            }, {
              hover: true
            });
            this.itemSelected.emit(e.features[0]);
          });

    })
  }

  refresh() {
    this.map.getSource('pics').setSourceProperty(() => { });
  }

}
