import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDefinition } from '@ant-design/icons-angular';

import { WebPageRoutingModule } from './web-page-routing.module';
import * as fromComponents from './components/index';
import * as fromContianers from './containers/index';
import { MemorizeFunctionPipe } from './shared/MemorizeFunction/memorize-function.pipe';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PlusCircleFill } from '@ant-design/icons-angular/icons';
import { TranslateModule } from '@ngx-translate/core';

const icons: IconDefinition[] = [ PlusCircleFill ]
@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContianers.containers,
    MemorizeFunctionPipe,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NzTimelineModule,
    NzIconModule.forRoot(icons),
    WebPageRoutingModule
  ]
})
export class WebPageModule { }
