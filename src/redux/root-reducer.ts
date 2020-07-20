import { combineReducers } from 'redux';
import { CartReducuer } from './cart-reducer';
import { OrderReducuer } from './order-reducer';
import { BookReducuer } from './book-reducer';


export const rootReducer = combineReducers({
    books: BookReducuer,
    cartItems: CartReducuer,
    orders: OrderReducuer,
});