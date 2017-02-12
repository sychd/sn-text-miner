import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {GroupsComponent} from "app/groups/groups.component";
import {RouterModule, Routes} from "@angular/router";
import {APP_CONFIG, AppConfig} from "./config/AppConfig";
import {CustomBrowserJsonp} from "./custom-jsonp/custom-browser-jsonp";
import {BrowserJsonp} from "@angular/http/src/backends/browser_jsonp";
import {appRoutes} from "./app.routes";
import {AuthorizeComponent} from "app/authorize/authorize.component";
import {PageNotFoundComponent} from "app/page-not-found/page-not-found.component";
import {GLOBAL, Global} from "app/global/Global";
@NgModule({
  declarations: [
    AppComponent,
    AuthorizeComponent,
    GroupsComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: GLOBAL, useValue: Global },
    { provide: BrowserJsonp, useClass: CustomBrowserJsonp }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
