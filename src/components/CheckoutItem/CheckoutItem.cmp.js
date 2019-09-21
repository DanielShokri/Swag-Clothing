import React from 'react';

import './checkoutitem.styles.scss';

const CheckoutItem = ({ cartItem: { name, price, quantity, imageUrl } }) => {

    return (
        <div className="cart">
            <ul className="cartWrap">
                <li className="items odd">

                    <div className="infoWrap">
                        <div className="cartSection">
                            <img src={imageUrl} alt="" className="itemImg" />
                            {/* <p className="itemNumber">#QUE-007544-002</p> */}
                            <h3>{name}</h3>

                            <p> <span className="qty">{quantity}</span> x ${price}</p>

                            {/* <p className="stockStatus"> In Stock</p> */}
                        </div>


                        <div className="prodTotal cartSection">
                            <p>$15.00</p>
                        </div>
                        <div className="cartSection removeWrap">
                            <a href="#">✕</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CheckoutItem;