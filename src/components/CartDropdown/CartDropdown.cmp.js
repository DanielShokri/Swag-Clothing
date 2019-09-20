import React, { useState } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem.cmp';


const CartDropdown = (props) => {
    const [dropdownActive, setDropdownActive] = useState(false);

    const handleClick = () => {
        console.log(props.cartItems)
        if (!dropdownActive) setDropdownActive(true);
        else setDropdownActive(false);
    }
    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }} className={`${dropdownActive ? 'is-active' : ''} dropdown`}>
            <div className="dropdown-trigger">
                <div className="navbar-item" aria-haspopup="true" aria-controls="dropdown-menu2">
                    <span>CART</span>
                    <span className="tag is-rounded">0</span>
                </div>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        {props.cartItems.map(cartItem => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            ))}
                    </div>

                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item button is-dark">
                        GO TO CHECKOUT
      </a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
    cartItems
})


export default connect(mapStateToProps)(CartDropdown);