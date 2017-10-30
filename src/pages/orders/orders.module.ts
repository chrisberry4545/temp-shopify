import {
    CommonModule,
} from '@angular/common';
import {
    NgModule,
} from '@angular/core';
import {
    BrowserModule,
} from '@angular/platform-browser';
import 'reflect-metadata';
import 'zone.js';

import OrdersComponent from './orders.component';

@NgModule({
    declarations: [
        OrdersComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
    ],
})
export default class OrdersModule { }
