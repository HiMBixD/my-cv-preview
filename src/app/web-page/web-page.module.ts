import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPageRoutingModule } from './web-page-routing.module';
import * as fromComponents from './components/index';
import * as fromContianers from './containers/index';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContianers.containers,
  ],
  imports: [
    CommonModule,
    WebPageRoutingModule
  ]
})
export class WebPageModule { }
