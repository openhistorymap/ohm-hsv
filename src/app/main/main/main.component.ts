import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  @Output() newState: EventEmitter<any> = new EventEmitter<any>();
  atDate;
  zoom;
  lat;
  lng;
  item;

  constructor(
    private l: Location,
    private ar: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }

  showItem(data) {

  }

  onDateChange(data) {
    this.atDate = data.float;
    this.changeUrl();
  }

  onMoveEnd(data) {
    console.log(data);
    this.zoom = data.zoom;
    this.lat = data.lat;
    this.lng = data.lng;
    this.changeUrl();
  }

  
  changeUrl(): void{
    this.l.go(`/${this.atDate}/${this.zoom}/${this.lat}/${this.lng}`);
    this.newState.emit({
      date: this.atDate,
      zoom: this.zoom,
      lat: this.lat,
      lng: this.lng
    })
  }
}
