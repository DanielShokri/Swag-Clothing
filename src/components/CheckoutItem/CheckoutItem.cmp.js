import React from 'react';
import { connect } from 'react-redux';

import { deleteItem, addItem, removeItem } from '../../store/cart/cartActions'
import './checkoutitem.styles.scss';

const CheckoutItem = ({ cartItem, deleteItem, addItem, removeItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <div className="cart">
            <ul className="cartWrap">
                <li className="items odd">
                    <div className="infoWrap">
                        <div className="cartSection">
                            <img src={imageUrl} alt="" className="itemImg" />
                            {/* <p className="itemNumber">#QUE-007544-002</p> */}
                            <h3>{name}</h3>
                        </div>
                        
                        <div className="qty-and-price">
                            <p> <span className="qty">
                                <span className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</span>
                                <span className="qty-value">{quantity}</span>
                                <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
                            </span> x ${price}</p>
                        </div>
                        {/* <p className="stockStatus"> In Stock</p> */}
                        <div className="prodTotal cartSection">
                            <p>${quantity * price}</p>
                        </div>
                        <div className="cartSection removeWrap">
                            <div className="remove" onClick={() => deleteItem(cartItem)}>✕</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);