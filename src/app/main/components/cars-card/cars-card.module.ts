import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsCardRoutingModule } from './cars-card-routing.module';
import { CarsCardComponent } from './cars-card.component';


@NgModule({
  declarations: [
    CarsCardComponent
  ],
  imports: [
    CommonModule,
    CarsCardRoutingModule
  ]
})
export class CarsCardModule { }
