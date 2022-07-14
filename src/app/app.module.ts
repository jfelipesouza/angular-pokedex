import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { MainHeaderApplicationComponent } from './main-header-application/main-header-application.component';

@NgModule({
  declarations: [AppComponent, MainHeaderApplicationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomescreenComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
