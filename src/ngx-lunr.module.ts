import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as lunr from 'lunr';

import { LunrService } from './services';
import { LunrToken } from './tokens';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: LunrToken,
      useFactory: lunrFactory
    },
    LunrService
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class NgxLunrModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxLunrModule
    };
  }

}

export function lunrFactory(): any {
  return lunr;
}
