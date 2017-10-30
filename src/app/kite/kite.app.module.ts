import { NgModule } from '@angular/core';
import 'reflect-metadata';
import 'zone.js';

import AppComponent from './kite.app.component';

import { BrowserModule } from '@angular/platform-browser';

import SharedAppModule from './../_shared/_shared.app.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SharedAppModule,
    ],
    providers: [],
})
export default class AppModule { }
