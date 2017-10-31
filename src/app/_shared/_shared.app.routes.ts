import { Routes } from '@angular/router';

import {
    AccountComponent,
    CollectionsComponent,
    OrdersComponent,
    ProductEditComponent,
    ProductsComponent,
} from './../../pages/index';

const rootRouterConfig: Routes = [
    { path: 'settings', component: AccountComponent },
    { path: 'collections', component: CollectionsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'product-edit', component: ProductEditComponent },
    { path: 'products', component: ProductsComponent },
    { path: '', redirectTo: 'collections', pathMatch: 'full' },
];

export default rootRouterConfig;
