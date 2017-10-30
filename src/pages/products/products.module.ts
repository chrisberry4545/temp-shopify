import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import 'reflect-metadata';
import 'zone.js';

import ProductsComponent from './products.component';

import {
    MultiFilterModule,
    ToggleModule,
} from '@kite-tech-ltd/kite-components/src/elements/index';

@NgModule({
    declarations: [
        ProductsComponent,
    ],
    imports: [
        CommonModule,
        MultiFilterModule,
        ToggleModule,
    ],
})
export default class ProductsModule { }
