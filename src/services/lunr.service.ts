import { Injectable, Inject } from '@angular/core';
import { LunrToken } from './../tokens';
// const lunr = require('lunr');
// import * as lunr from 'lunr';

@Injectable()
export class LunrService {

  lunrInstance: lunr.Index;

  constructor(@Inject(LunrToken) private _lunr: any) {
    this.lunrInstance = new this._lunr.Index();
    // this.lunrInstance.
  }
}