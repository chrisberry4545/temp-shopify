interface OrderInterface {
    order_id: number;
    created: string;
    customer: {
        name: string;
    };
    kite_order_cost: {
        total_cost: number;
    };
    kite_order_status: string;
    status: string;
    shopify_order_name: string;
    profit: number;
    reprint_requested: boolean;
    test?: boolean;
}

export default OrderInterface;
