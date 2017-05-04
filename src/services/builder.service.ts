import { Injectable, Inject } from '@angular/core';
import { LunrToken } from './../tokens';

@Injectable()
export class BuilderService {

  constructor(@Inject(LunrToken) private _lunr: any) { }
}