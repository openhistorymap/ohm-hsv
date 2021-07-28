import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  upload: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  saveAndClose(){
    this.save().subscribe(d=>{
      //
    })
  }
  saveAndLocate(){}

  save(): Observable<any> {
    return null;
  }

}
