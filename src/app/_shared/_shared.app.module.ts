import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import 'reflect-metadata';
import 'zone.js';

import SharedAppComponent from './_shared.app.component';
import rootRouterConfig from './_shared.app.routes';

import {
    AccountModule,
    CollectionsModule,
    OrdersModule,
    ProductsModule,
} from './../../pages/index';

import {
    DisableScrollingService,
} from '@kite-tech/kite-components/src/helpers/services/index';

import {
    HeaderModule,
} from './../../molecules/index';

@NgModule({
    declarations: [
        SharedAppComponent,
    ],
    exports: [
        SharedAppComponent,
    ],
    imports: [
        AccountModule,
        BrowserModule,
        BrowserAnimationsModule,
        CollectionsModule,
        OrdersModule,
        HeaderModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true }),
        ProductsModule,
    ],
    providers: [
        DisableScrollingService,
    ],
})
export default class AppModule { }
