import { type } from "os";

type Author = {
    id: Number;
    name: string;
}

export type Book = {
    id: number;
    isbn13: string;
    title: string;
    image_url: string;
    num_pages: string;
    publication_year: string;
    average_rating: string;
    description: {
        text: Array<string>;
    },
    authors: {
        author: Author;
    };
    price: number;
    publication_year: string;
};


export type Order = {
    book: Book;
    status: number;
    date: number;
    quantity: number;
};

export type CartItem = {
    book: Book;
    quantity: number;
}


export type AddOrderAction = {
    type: string,
    orders: Order[]
}

export type AddToCartAction = {
    type: string,
    book: Book
}

export type SimpleAction = {
    type: string
}

export type BooksLoadedAction ={
    type: string,
    books: Book[];
}

export type ShowTaostAction = {
    type: string,
    config: {
        text: string
    }
}

export type AppActions = AddOrderAction | AddToCartAction | SimpleAction | BooksLoadedAction;

export type AppState = {
    cartItems?: CartItem[],
    books?: Book[],
    orders?: Order[],
    toast: {
        show: boolean,
        text: string
    }
};

