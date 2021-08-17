import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ohm-sidebar',
  templateUrl: './ohm-sidebar.component.html',
  styleUrls: ['./ohm-sidebar.component.scss']
})
export class OhmSidebarComponent implements OnInit {

  infoData: any = {};

  @Input() appname: string = '';

  constructor(
    private ht: HttpClient
  ) { }

  ngOnInit(): void {
    this.ht.get('https://raw.githubusercontent.com/openhistorymap/ohm-raw/main/info.json').subscribe((data:{info, buttons}) => {
      this.infoData = data;
    })
  }

}
