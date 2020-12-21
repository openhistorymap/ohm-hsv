import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from 'src/app/uploader/dialog/dialog.component';
import { LocatorComponent } from 'src/app/uploader/locator/locator.component';
import { UploaderComponent } from 'src/app/uploader/uploader/uploader.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  @Output() newState: EventEmitter<any> = new EventEmitter<any>();
  atDate = 1866;
  zoom = 14;
  lat = 44.49640804841195;
  lng = 11.343678235458356;
  item_id: string;
  item: any;

  @ViewChild(MapComponent) map: MapComponent;

  constructor(
    private l: Location,
    private ar: ActivatedRoute,
    private d: MatDialog
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      this.atDate = params.atDate;
      this.zoom = params.zoom;
      this.lat = params.lat;
      this.lng = params.lng;
      if(params.ref) {
        this.item_id = params.ref;
      }
    })
  }

  showItem(data) {
    this.item = data;
  }

  onDateChange(data) {
    this.atDate = data.float;
    this.changeUrl();
  }

  onMoveEnd(data) {
    this.zoom = data.zoom;
    this.lat = data.lat;
    this.lng = data.lng;
    this.changeUrl();
  }

  
  changeUrl(): void{
    if( this.item) {
      this.l.go(`/map/${this.atDate}/${this.zoom}/${this.lat}/${this.lng};ref=${this.item.properties.id}`);
    } else {
      this.l.go(`/map/${this.atDate}/${this.zoom}/${this.lat}/${this.lng}`);
    }
    this.newState.emit({
      date: this.atDate,
      zoom: this.zoom,
      lat: this.lat,
      lng: this.lng
    })
  }

  addImage() {
    this.d.open(DialogComponent);
  }

  addLocation() {
    this.d.open(LocatorComponent, {data: { image: this.item }});
  }
}
