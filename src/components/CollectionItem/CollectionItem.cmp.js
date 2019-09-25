import React from 'react';
import { connect } from 'react-redux'

import { addItem } from '../../store/cart/cartActions';
import { toast } from 'react-toastify';
import './collectionitem.styles.scss'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    const handleAddItem = () => {
        addItem(item)
        toast(`${name} is added to your cart!`)
    }

    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <button onClick={handleAddItem} className="button is-light add-to-cart">ADD TO CART</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);