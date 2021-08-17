import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OhmHsvService {

  baseurl = 'https://api.view.openhistorymap.org/';

  constructor(
    private http: HttpClient
  ) { }

  saveImage(url): Observable<any>{
    console.log(url);
    return this.http.post(this.baseurl+'pic', {url, author:'ohm'})
  }

  saveMeta(imgId, meta): Observable<any>{
    console.log(imgId, meta);
    return this.http.post(`${this.baseurl}pic/${imgId}/meta`, JSON.stringify(meta))
  }
  
  saveLocation(imgId, location): Observable<any>{
    console.log(imgId, location);
    return this.http.post(`${this.baseurl}pic/${imgId}/loc`, JSON.stringify(location))
  }

  getData(imgId): Observable<any> {
    return this.http.get(`${this.baseurl}pic/${imgId}`);
  }

  getNearby(lat:number, lng:number, radius=1000){
    return this.http.get(this.baseurl+'nearby.geojson', {params:{
      lat: '' + lat, 
      lng: '' + lng, 
      radius: '' + radius
    }});
  }

  saveLoc(loc){
    return this.http.post(this.baseurl+'pic', {})
  }
}
