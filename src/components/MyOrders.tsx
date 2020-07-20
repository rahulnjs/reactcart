import React from 'react';
import '../styles/my-order.scss';
import { AppState } from '../types';


import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import { EmptyBanner } from './Empty';

const mapStateToProps = (state: AppState) => {
    return {
        orders: state.orders
    };
};


const mapDispatchToProps = {};

let connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export const MyOrders: React.FC<Props> = ({ orders = [] }) => {
    return (
        <div className="orders">
            {orders &&
                orders.map(order => (
                    <div key={order.book.id} className="order">
                        <div className="header">
                            <div className="header__order-date">
                                Order Placed: {new Date(order.date).toLocaleString()}
                            </div>
                            <div className="header__status">
                                Status: {`${order.status === 1 ? 'Delivered' : 'Processing'}`}
                            </div>
                        </div>
                        <div className="book">
                            <div className="book__thumb">
                                <img src={order.book.image_url} alt={`Cover of ${order.book.title}`} />
                            </div>
                            <div className="book__info">
                                <div className="book__info__title">
                                    {order.book.title}
                                </div>
                                <div className="book__info__author">
                                    {order.book.authors.author.name}
                                </div>
                                <div className="book__info__price">
                                    ${order.book.price}
                                    {
                                        order.quantity > 1 &&
                                        <div className="book__info__quant">
                                            x {order.quantity}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                orders.length === 0 &&
                <EmptyBanner text="You have not placed any orders!" />
            }
        </div>
    )
}


export default compose(connector)(MyOrders);