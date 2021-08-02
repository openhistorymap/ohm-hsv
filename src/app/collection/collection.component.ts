import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  infoData: any;
  items: any[];
  count : 0;

  coll: string;

  
  pageEvent: PageEvent;

  constructor(
    private http: HttpClient,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.http.get('assets/info.json').subscribe(data => {
      this.infoData = data;
    })
    this.ar.params.subscribe(params => {
      console.log(params)
      this.coll = params.name;

      this.getPage(params.page);
    })
  }

  getPage(offset: number|any =0){
    if(isNaN(offset)){
      offset = offset.pageIndex * offset.pageSize
    }
    console.log(offset);
    this.http.get('http://51.15.160.236:9055/colls?coll=' + this.coll + '&o='+offset).subscribe((data:any)=>{
      this.items = data.pics;
      this.count = data.total;
    })
  }

}
