import { Component } from '@angular/core';

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
    selector: 'account-component',
    styleUrls: [
        './account.component.scss',
    ],
    templateUrl: './account.component.template.pug',
})
export default class AccountComponent {
}
