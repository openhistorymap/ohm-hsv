import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

  tabelize(item){
    let ret = '<table>';
    for(const k of Object.keys(item.properties)){
      ret += '<tr><td>' + k + '</td><td>' + item.properties[k] + '</td></tr>';
    }
    ret+='</table>';
    return ret;
  }

}
