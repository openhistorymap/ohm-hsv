import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

declare const mapboxgl;


@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.scss']
})
export class LocatorComponent implements OnInit {

  input_image = 'https://upload.wikimedia.org/wikipedia/commons/6/66/Fotografia_dell%27Emilia_-_Bologna_-_Madonna_di_San_Luca.jpg';

  base_url = 'https://maps.googleapis.com/maps/api/streetview?size=400x300&location=$LAT$,$LON$&fov=$FOV$&heading=$HEADING$&pitch=0&key=AIzaSyD7M0G4NfE9oAdx8Q8DIflKRj7ZCCyBMHw';// &signature=$SIGNATURE$'
  map;

  meta: any = {
    direction:0,
    angle: 80,
    height:1.60
  };
  constructor(
    public dialogRef: MatDialogRef<LocatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // if (this.data){
    //   this.input_image = this.data.input_image;
    // }

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lybW1vIiwiYSI6ImNpbGY4cmlrbTAwMmh3Z200eGpqcTlyZGgifQ.zLmK4VAZtCUZBpR_GCdytw';
    this.map = new mapboxgl.Map({
      container: 'locatormap', // container id
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: [11.34359240476931, 44.49484685252506], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    this.map.on('click', (ev) =>{
      this.meta.lat = ev.lngLat.lat;
      this.meta.lng = ev.lngLat.lng;

      this.map.getSource('location').setData({
        type: 'FeatureCollection', features: [{
          type: 'Feature', properties: {}, geometry: {
            type: 'Point', coordinates: [this.meta.lng, this.meta.lat]
          }
        }]}
      )
    })

    this.map.on('load', () => {


      this.map.addSource('location', {
        'type': 'geojson',
        'data': {type: 'FeatureCollection', features: []}
        });
      this.map.addLayer(
        {
        'id': 'location-point',
        'type': 'circle',
        'source': 'location',
        'layout': {},
        'paint': {
          'circle-color': '#f08',
          'circle-opacity': 0.4
        }
        // This is the important part of this example: the addLayer
        // method takes 2 arguments: the layer as an object, and a string
        // representing another layer's name. if the other layer
        // exists in the stylesheet already, the new layer will be positioned
        // right before that layer in the stack, making it possible to put
        // 'overlays' anywhere in the layer stack.
        // Insert the layer beneath the first symbol layer.
        }
        );
    })
  }

  get newViewUrl(): string {
    return this.base_url
      .replace('$LAT$', this.meta.lat)
      .replace('$LON$', this.meta.lng)
      .replace('$FOV$', this.meta.angle)
      .replace('$HEADING$', this.meta.direction)
  }

}
