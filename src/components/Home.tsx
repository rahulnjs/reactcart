import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/home.scss';
import { Book, AppState, AppActions } from '../types';


import { connect, ConnectedProps } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { addToCartAction } from '../redux/actions';
import { EmptyBanner } from './Empty';

const mapStateToProps = (state: AppState) => {
    return {
        books: state.books
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => {
    return {
        addToCart: (book: Book) => dispatch(addToCartAction(book))
    }
}

let connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export const Home: React.FC<Props> = ({ books = [], addToCart }) => {

    let history = useHistory();

    function buyNow(book: Book) {
        addToCart(book);
        history.push('/cart');
    }

    return (
        <div className="book-list">
            {
                books.map(book => (
                    <div key={String(book.id)} className="book">
                        <div className="book__thumb">
                            <Link to={`/book/${book.id}`} >
                                <img src={book.image_url} alt={`Cover of ${book.title}`} title="Open" />
                            </Link>
                        </div>
                        <div className="book__info">
                            <div className="book__info__title">
                                <Link to={`/book/${book.id}`} >
                                    {book.title}
                                </Link>
                            </div>
                            <div className="book__info__desc">
                                {book.description.text[0]}
                            </div>
                            <div className="book__other">
                                <div className="book__other__rating">
                                    <span><i className="fas fa-star"></i> {book.average_rating}</span>
                                </div>
                                <div className="book__other__price">
                                    ${book.price}
                                </div>
                            </div>
                        </div>
                        <div className="book__action-btn">
                            <div className="add-to-cart">
                                <button className="btn-secondary" onClick={() => addToCart(book)}><i className="fas fa-cart-plus"></i></button>
                            </div>
                            <div className="buy-now">
                                <button className="btn-primary" onClick={() => buyNow(book)}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                books.length === 0 &&
                <div className="empty">
                    <EmptyBanner text="Loading books...." />
                </div>
            }
        </div>
    )
}


export default compose(connector)(Home);