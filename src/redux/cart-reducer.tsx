import { CartItem, AddToCartAction } from "../types";
import { ACTION } from './constants';

const cartItems: CartItem[] = [];


export const CartReducuer = (state = cartItems, action: AddToCartAction): CartItem[] => {
    switch(action.type) {
        case ACTION.ADD_TO_CART: 
            let cartItem: CartItem = {
                book: action.book,
                quantity: 1
            };
            let item: CartItem[] = state.filter(item => item.book.id === cartItem.book.id);
            if (item.length > 0) {
                item[0].quantity++;
                return [...state]
            } else {
                return [
                    ...state,
                    cartItem
                ]
            }            
        case ACTION.CLEAR_CART:
            return [];
        default: 
            return state;
    }
}