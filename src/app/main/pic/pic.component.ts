import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']
})
export class PicComponent implements OnInit {

  
  infoData: any;
  pic_meta: any;
  count : 0;

  img_id: number;

  constructor(
    private http: HttpClient,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.http.get('/assets/info.json').subscribe(data => {
      this.infoData = data;
    })
    this.ar.params.subscribe(params => {
      console.log(params)

      this.image(params.id);
      this.img_id = params.id;
    })
  }

  image(id){
    this.http.get('http://51.15.160.236:9055/pics/' + id).subscribe((data:any)=>{
      this.pic_meta = data[0];
    })
  }

  storeLocation($ev){
    this.http.post('http://51.15.160.236:9055/pic/'+this.img_id + '/loc', {
      geom:{type:'Point', coordinates:[$ev.lng, $ev.lat]},
      proj: 'EPSG:4326',
      dir:$ev.direction+180
    }).subscribe(data =>{
      console.log('done');
    })
  }

}
