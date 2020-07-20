import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { useHistory } from 'react-router-dom';
import '../styles/cart.scss';
import { Order, AppState, AppActions } from '../types';
import { DummyForm } from './DummyForm';
import { addToOrdersAction, clearCartAction } from '../redux/actions';
import { EmptyBanner } from './Empty';


const mapStateToProps = (state: AppState) => {
    return {
        items: state.cartItems
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => {
    return {
        addToOrders: (orders: Order[]) => dispatch(addToOrdersAction(orders)),
        clearCart: () => dispatch(clearCartAction())
    }
}

let connector = connect(mapStateToProps, mapDispatchToProps);


type Props = ConnectedProps<typeof connector>;

const Cart: React.FC<Props> = ({ items = [], addToOrders, clearCart }) => {

    let history = useHistory();

    let bookPrice = items.reduce((total, item) => item.book.price * item.quantity + total, 0);
    let tax = bookPrice * .18;
    let shippingCharge = bookPrice * .05;
    let total = bookPrice + tax + shippingCharge;

    function checkout() {
        let orders: Order[] = items.map(({ book: b, quantity }) => {
            return {
                book: b,
                quantity,
                status: 1,
                date: new Date().getTime()
            }
        });
        addToOrders(orders);
        clearCart();
        items = [];
        history.push('/orders');
    }

    return (
        <div className="checkout">
            <div className="address-part">
                <h2>Shipping Address</h2>
                <div className="form">
                    <div className="form-body">
                        <DummyForm />
                    </div>
                    <div className="form__action">
                        <button className="btn-primary margin-r"> <i className="fas fa-save"></i> Save Address</button>
                        <button className="btn-secondary"><i className="fas fa-pencil-alt"></i> Edit Address</button>
                    </div>
                </div>
            </div>
            <div className="order-details">
                <div className="cart-details">
                    <h2>Shopping Bag</h2>
                    {items &&
                        items.map(item => (
                            <div key={String(item.book.id)} className="book">
                                <div className="book__thumb">
                                    <img src={item.book.image_url} alt={`Cover of ${item.book.title}`} />
                                </div>
                                <div className="book__info">
                                    <div className="book__info__title">
                                        {item.book.title}
                                    </div>
                                    <div className="book__info__author">
                                        {item.book.authors.author.name}
                                    </div>
                                    <div className="book__info__price">
                                        ${item.book.price}
                                        {
                                            item.quantity > 1 &&
                                            <div className="book__info__quant">
                                                x {item.quantity}
                                            </div>
                                        }
                                    </div>

                                </div>
                            </div>
                        ))

                    }
                    {
                        items.length === 0 && 
                        <EmptyBanner text="No Items in Cart!" /> 
                    }
                </div>
                <div className="payment">
                    <h2>Payment Info</h2>
                    <div className="invoice">
                        <div className="item">
                            <div className="label">
                                Item Price
                            </div>
                            <div className="price">
                                ${bookPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="item">
                            <div className="label">
                                Tax
                            </div>
                            <div className="price">
                                ${tax.toFixed(2)}
                            </div>
                        </div>
                        <div className="item item--last">
                            <div className="label">
                                Shipping Charge
                            </div>
                            <div className="price">
                                ${shippingCharge.toFixed(2)}
                            </div>
                        </div>
                        <div className="item">
                            <div className="label">
                                Total
                            </div>
                            <div className="price">
                                ${total.toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action">
                    <button className="btn-secondary " onClick={() => history.push('/')}><i className="fas fa-clipboard-list"></i> Continue Shopping</button>
                    <button className={`btn-primary ${items.length === 0 ? 'disabled' : ''}`} onClick={checkout}><i className="fas fa-shopping-basket"></i> Checkout</button>
                </div>
            </div>
        </div>
    )
}


export default compose(connector)(Cart);