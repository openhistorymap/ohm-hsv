import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input() item;

  @Output() close: EventEmitter<any> = new EventEmitter<any>();

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

  public doclose(){
    this.close.emit();
  }

}
