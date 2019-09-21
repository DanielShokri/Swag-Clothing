import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../store/cart/cartSelectors'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.cmp';


import './checkoutpage.styles.scss'

const CheckoutPage = ({ cartItems, total }) => {

    return (
        <div className="wrap cf">
            <h1 className="projTitle">Responsive Table<span>-Less</span> Shopping Cart</h1>
            <div className="heading cf">
                <h1>My Cart</h1>
                <a href="#" className="continue">Continue Shopping</a>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }

            <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
                <a href="#" className="btn"></a></div>

            <div className="subtotal cf">
                <ul>
                    <li className="totalRow"><span className="label">Subtotal</span><span className="value">$35.00</span></li>

                    <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>

                    <li className="totalRow"><span className="label">Tax</span><span className="value">$4.00</span></li>
                    <li className="totalRow final"><span className="label">Total</span><span className="value">$44.00</span></li>
                    <li className="totalRow"><a href="#" className="btn continue">Checkout</a></li>
                </ul>
            </div>
        </div>

    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);