import React, { useState, useEffect } from 'react';

import CollectionItem from '../../components/CollectionItem/CollectionItem.cmp';
import swagService from '../../services/swagService';
import './collectionpage.styles.scss'

const CollectionPage = ({ match }) => {
    const [collectionItems, setCollectionItems] = useState([]);
    const { title, items } = collectionItems;
    useEffect(() => {
        swagService.getShopCollection(match.params.collectionId)
            .then(data => setCollectionItems(data))
    }, [])

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items && (
                    items.map(item => (<CollectionItem key={item.id} item={item} />
                    )
                    ))}
            </div>
        </div>
    )
}

export default CollectionPage;