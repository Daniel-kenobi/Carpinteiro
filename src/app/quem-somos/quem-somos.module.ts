import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuemSomosRoutingModule } from './quem-somos-routing.module';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    QuemSomosComponent
  ],
  imports: [
    CommonModule,
    QuemSomosRoutingModule,
    MenuModule
  ]
})
export class QuemSomosModule { }
