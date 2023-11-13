import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import routeConfig from '../src/app/routes';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';

platformBrowserDynamic().bootstrapModule(AppModule
  // {
  //   providers: [provideRouter(routeConfig)],
  // }
)
  .catch(err => console.error(err));


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/