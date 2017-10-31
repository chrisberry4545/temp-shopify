import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import 'reflect-metadata';
import 'zone.js';

import ProductsComponent from './products.component';

import {
    DropdownSelectBoxModule,
    MultiFilterModule,
    ToggleModule,
} from './../../../node_modules/@kite-tech/kite-components/src/elements/index';

import {
    SvgHrefModule,
} from '@kite-tech/kite-components/src/helpers/directives/index';

@NgModule({
    declarations: [
        ProductsComponent,
    ],
    imports: [
        CommonModule,
        DropdownSelectBoxModule,
        MultiFilterModule,
        SvgHrefModule,
        ToggleModule,
    ],
})
export default class ProductsModule { }
