import { combineReducers } from 'redux';
import { OrderReducuer } from './order-reducer';
import { CartReducuer } from './cart-reducer';
import { BookReducuer } from './book-reducer'
import { ToastReducer } from './common-reducer';


export const rootReducer = combineReducers({
    books: BookReducuer,
    cartItems: CartReducuer,
    orders: OrderReducuer,
    toast: ToastReducer
});