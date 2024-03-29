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
  @Input() lat = 50.84512821447697;
  @Input() lng = 4.406654828285127;
  @Input() zoom = 14;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() moveend: EventEmitter<any> = new EventEmitter<any>();
  featureId;
  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lybW1vIiwiYSI6ImNpbGY4cmlrbTAwMmh3Z200eGpqcTlyZGgifQ.zLmK4VAZtCUZBpR_GCdytw';
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: [this.lng, this.lat], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom,
      transformRequest: (url, resourceType) => {
        console.log(url, resourceType);
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
          'https://api.view.openhistorymap.org/{atDate}/{z}/{x}/{y}/vector.pbf'
        ],
        'minzoom': 1,
        'maxzoom': 25
      });
      this.map.addSource('eph', {
        type: 'vector',
        tiles: [
          'https://tiles.events.openhistorymap.org/items/{atDate}/{z}/{x}/{y}/vector.pbf',
        ],
        'minzoom': 3,
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

      
      this.map.addLayer({
        'id': 'eph',
        'source': 'eph',
        'source-layer':'eph',
        'type': 'circle',
        'layout': {},
        'paint': {
          'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            0, 2,
            9, 2,
            11, ['/', ['*', 10, ['number', ['get', 'bombing:tons'], 1]], 1],
            13, ['/', ['*', 30, ['number', ['get', 'bombing:tons'], 1]], 1],
          ],
          'circle-color':"#ff0000",
          'circle-opacity':0.6
        }
    }, 'pics-dots');

    
    this.map.addLayer({
      'id': 'eph-label',
      'source': 'eph',
      'source-layer':'eph',
      'type': 'symbol',
      'layout': {
        'text-field': '{label}',
        'text-size':10,
        'text-offset':[0,-1]
      }, 
      'paint':{
        'text-color':"#ff0000",
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
              source: 'pics',
              sourceLayer:'pics-dots',
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
    this.map.getSource('eph').setSourceProperty(() => { });
  }

}
