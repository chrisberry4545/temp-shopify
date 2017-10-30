import {
    Component,
    OnInit,
} from '@angular/core';

import {
    CollectionInterface,
    ProductInterface,
} from './../../models/index';

import {
    ANIMATION_DEFAULTS_CONST,
    fadeInOutAnimation,
} from '@kite-tech-ltd/kite-components/src/helpers/animations/index';

@Component({
    animations: [
        fadeInOutAnimation({
            animationTimingsEnter: ANIMATION_DEFAULTS_CONST
                .animationTimings,
            animationTimingsLeave: '0s',
        }),
    ],
    host: {
        '[@fadeInOutAnimation]': '',
        'style': 'display: block',
    },
    selector: 'products-component',
    styleUrls: [
        './products.component.scss',
    ],
    templateUrl: './products.component.template.pug',
})
export default class ProductsComponent implements OnInit {
    public collection: CollectionInterface;

    public ngOnInit() {
        this.setupProducts();
    }

    public setupProducts() {
        this.collection = {
            products: [{
                title: 'Unisex Fine Jersey T-Shirt',
            }, {
                title: 'California Fleece Pullover Hoodie',
            }],
            title: 'Test123',
        };
    }
}
