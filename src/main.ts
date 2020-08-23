import { enable ProdMode } from '@angular/core';
import { platformBrowser Dynamic } from '@angular/platform-browser-dynamic';
import { Event Emitter } from 'events';

import { App Module } from './app/app.module';
import { environment } from './ environments/environment';

(window as any).global = window;
(window as any).global Events = new EventEmitter();

if (environment. production) {
  enableProdMode();
}

platformBrowser Dynamic()
  .bootstrap Module(AppModule)
  .catch(err => console.log(err));
