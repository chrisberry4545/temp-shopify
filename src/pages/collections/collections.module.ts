import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import 'reflect-metadata';
import 'zone.js';

import CollectionsComponent from './collections.component';

import {
    ModalModule,
    ProgressLoadingSpinnerModule,
    ToggleModule,
} from '@kite-tech-ltd/kite-components/src/elements/index';

import {
    SvgHrefModule,
} from '@kite-tech-ltd/kite-components/src/helpers/directives/index';

@NgModule({
    declarations: [
        CollectionsComponent,
    ],
    exports: [
        CollectionsComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ModalModule,
        ProgressLoadingSpinnerModule,
        SvgHrefModule,
        ToggleModule,
    ],
})
export default class CollectionsModule { }
