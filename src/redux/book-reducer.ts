import { Book, BooksLoadedAction } from "../types";
import { ACTION } from './constants';

const books: Book[] = [];

export const BookReducuer = (state = books, action: BooksLoadedAction)  => {
    switch(action.type) {
        case ACTION.LOAD_BOOKS: 
            return state;
        case ACTION.BOOKS_LOADED:
            return [
               ...action.books
            ]
        default: 
            return state;
    }
}
