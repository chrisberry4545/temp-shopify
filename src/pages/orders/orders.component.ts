import {
    Component,
    OnInit,
} from '@angular/core';

import {
    AllOrdersInterface,
    OrderInterface,
} from './../../models/index';

import {
    ANIMATION_DEFAULTS_CONST,
    fadeInOutAnimation,
} from '@kite-tech/kite-components/src/helpers/animations/index';

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
    selector: 'orders-component',
    styleUrls: [
        './orders.component.scss',
    ],
    templateUrl: './orders.component.template.pug',
})
export default class OrdersComponent implements OnInit {
    public orders: AllOrdersInterface;

    public ngOnInit() {
        this.getOrders();
    }

    public getOrders() {
        this.orders = {
            page: 1,
            per_page: 100,
            results: [{
                created: (new Date().toString()),
                customer: {
                    name: 'test',
                },
                kite_order_cost: {
                    total_cost: 10,
                },
                kite_order_status: 'TestProcessing',
                order_id: 1,
                status: 'abc',
                shopify_order_name: 'order name',
                profit: 20,
                reprint_requested: false,
            }],
            total: 1,
        };
    }

    public returnOrderStatus(order: OrderInterface) {
        const failedOrderStatus = ['Can\'t Fulfill, setup Billing in ' +
            '<a href="/settings/?section=billing">Settings</a>',
            'Can\'t Fulfill, Link Kite.ly account in ' +
            '<a href="/settings/?section=account">Settings</a>',
            'Can\'t fulfill, order has no shipping address'];

        if (failedOrderStatus.indexOf(order.kite_order_status) > -1) {
            return order.kite_order_status;
        }

        return order.kite_order_cost.total_cost ?
            order.kite_order_status : 'Processing';
    }
}
