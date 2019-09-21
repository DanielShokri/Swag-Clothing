import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItemsCount, selectCartItems } from '../../store/cart/cartSelectors';

import CartItem from '../CartItem/CartItem.cmp';
import './cartdropdown.styles.scss';


const CartDropdown = ({ cartItems, cartQuantity }) => {
    const [dropdownActive, setDropdownActive] = useState(false);

    const handleClick = () => {
        if (!dropdownActive) setDropdownActive(true);
        else setDropdownActive(false);
    }
    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }} className={`${dropdownActive ? 'is-active' : ''} dropdown`}>
            <div className="dropdown-trigger">
                <div className="navbar-item" aria-haspopup="true" aria-controls="dropdown-menu2">
                    <span>CART</span>
                    <span className="tag is-rounded">{cartQuantity}</span>
                </div>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        {cartItems.length ?
                            cartItems.map(cartItem => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            )) :
                            <span className="empty-msg">Your cart is empty</span>
                        }
                    </div>

                    <hr className="dropdown-divider" />
                    <Link to="/checkout" style={{ display: 'flex', margin: '0 auto', width: '80%' }} className="go-to-checkout button is-dark">
                        GO TO CHECKOUT
      </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    cartQuantity: selectCartItemsCount(state)
})


export default connect(mapStateToProps)(CartDropdown);