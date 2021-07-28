import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConverterService } from '@ohm/utils';

declare const vis;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  container;
  timeline;
  @Input() atDate = 1866;
  
  @Output() dateChanged: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    private conv: ConverterService
  ) { }

  ngOnInit(): void {
      // DOM element where the Timeline will be attached
    this.container = document.getElementById('visualization');

    // Create a DataSet (allows two way data-binding)
    var items = new vis.DataSet([]);

    // Create a Timeline
    this.timeline = new vis.Timeline(this.container, items, {
      showCurrentTime: false
    });
    
    this.timeline.on('click', (properties) => {
      this.atDate = this.conv.dateToFloat(properties.time);
      this.timeline.setCustomTime(properties.time, 'atTime');
      this.dateChanged.emit({date:properties.time, float:this.atDate});
    });
    
    this.timeline.addCustomTime(this.conv.floatToDate(this.atDate), 'atTime');
    const d = this.conv.floatToDate(this.atDate);
    this.timeline.setWindow(new Date(d.getFullYear() - 10, d.getMonth(), d.getDate()), new Date(d.getFullYear() + 10, d.getMonth(), d.getDate()));
  }

}
