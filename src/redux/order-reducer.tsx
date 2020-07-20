import { AddOrderAction, Order } from "../types";
import { ACTION } from './constants';

const orders: Order[] = [];


export const OrderReducuer = (state = orders, action: AddOrderAction): Order[] => {
    switch(action.type) {
        case ACTION.ADD_TO_ORDERS: 
            return [
                ...action.orders,
                ...state
            ]
        default: 
            return state;
    }
}