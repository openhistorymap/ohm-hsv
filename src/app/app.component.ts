import { Component } from '@angular/core';
import { MatomoInjector } from 'ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ohm-hsv';

  
  constructor(
    private matomoInjector: MatomoInjector
  ) {}

  ngOnInit() {
    this.matomoInjector.init('//tracker.openhistorymap.org/', 2);
  }
}
