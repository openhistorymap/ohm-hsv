import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {

  meta: any = {
    angle: 70,
    height: 1.60,
    direction: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

}
