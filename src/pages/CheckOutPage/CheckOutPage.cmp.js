import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCartItems, selectCartTotal } from '../../store/cart/cartSelectors'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.cmp';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton.cmp';


import './checkoutpage.styles.scss'

const CheckoutPage = ({ cartItems, total }) => {
    const [promoCode, setPromoCode] = useState()

    const handlePromoCode = event => {
        const promo = event.target.value;
        setPromoCode(promo);
    }
    const HandlePromoSubmit = () => {
        const discountPrice = total * 10 / 100;
        if (promoCode === '1234') return <span className="value">${total - discountPrice}</span>
        else return <span className="value">${total + 5 + 4}</span>
    }

    return (
        <div className="wrap cf">
            <h1 className="projTitle">Swag. Clothing <span>-Less</span> is more.</h1>
            <div className="heading cf">
                <h1>My Cart</h1>
                <Link to="/" className="continue">Continue Shopping</Link>
            </div>
            <div>
                {!cartItems.length ? <h1 className="no-items-title">You have no items in your cart!</h1> :
                    <>
                        <>
                            {
                                cartItems.map(cartItem => (
                                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                                ))
                            }
                        </>
                        <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label><input onChange={handlePromoCode} type="text" name="promo" placholder="Enter Code" />
                            <button onClick={HandlePromoSubmit} className="btn"></button></div>

                        <div className="subtotal cf">
                            <ul>
                                <li className="totalRow"><span className="label">Subtotal</span><span className="value">${total}</span></li>

                                <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>

                                <li className="totalRow"><span className="label">Tax</span><span className="value">$4.00</span></li>
                                <li className="totalRow final"><span className="label">Total</span><HandlePromoSubmit /></li>
                                <span>*Please use the following test credit card for payment
                                    <br />
                                    Credit number: 4242 4242 4242 4242, Y/M: 01/20 CVV: 123
                                </span>
                                <li className="totalRow"><StripeCheckoutButton price={total + 4 + 5} /></li>
                                {/* <a href="#" className="btn continue">Checkout</a> */}
                            </ul>
                        </div>
                    </>
                }
            </div>


        </div>

    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);