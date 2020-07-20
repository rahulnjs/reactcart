import { ACTION } from './constants';
import { Book, Order, AppActions, SimpleAction, BooksLoadedAction, ShowTaostAction } from '../types';

export const addToCartAction = (book: Book): AppActions => {
    return {
        type: ACTION.ADD_TO_CART,
        book
    };
}

export const clearCartAction = (): SimpleAction => {
    return {
        type: ACTION.CLEAR_CART
    };
}

export const addToOrdersAction = (orders: Order[]): AppActions => {
    return {
        type: ACTION.ADD_TO_ORDERS,
        orders
    }
};


export const loadBooksAction = (): BooksLoadedAction => {
    return {
        type: ACTION.LOAD_BOOKS,
        books: []
    };
}


export const booksLoadedAction = (books: Book[]): BooksLoadedAction => {
    return {
        type: ACTION.BOOKS_LOADED,
        books
    };
}


export const booksLoadFailed = (): SimpleAction => {
    return {
        type: ACTION.LOAD_BOOKS_FAILED
    };
} 


export const showToastAction = (text: string): ShowTaostAction => {
    return {
        type: ACTION.SHOW_TOAST,
        config: {
            text
        }
    }
}


export const hideToastAction = (): SimpleAction => {
    return {
        type: ACTION.HIDE_TOAST
    }
}

