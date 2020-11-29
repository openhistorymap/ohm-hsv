import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { MapComponent } from './main/map/map.component';

const routes: Routes = [
  {path: '', component: MainComponent, children:[
    {path: 'map/:date/:zoom/:x/:y', component: MapComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
