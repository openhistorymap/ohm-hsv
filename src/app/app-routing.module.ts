import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { MainComponent } from './main/main/main.component';
import { MapComponent } from './main/map/map.component';
import { PicComponent } from './main/pic/pic.component';

const routes: Routes = [
  {path: 'map/:date/:zoom/:x/:y', component: MainComponent},
  {path: 'collection/:name', component: CollectionComponent},
  {path: 'pics/:id', component: PicComponent},
  
  {path: '', redirectTo: 'map/1866/14/44.49365296864795/11.3428628439068', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
