import {
    OrderInterface,
} from './index';

interface AllOrdersInterface {
    page: number;
    per_page: number;
    results: OrderInterface[];
    total: number;
}

export default AllOrdersInterface;
