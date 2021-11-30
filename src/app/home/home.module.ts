import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuModule } from '../menu/menu.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule,
    IvyCarouselModule,
    RouterModule
  ]
})
export class HomeModule { }
