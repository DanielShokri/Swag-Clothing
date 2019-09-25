import React, { useState, useEffect } from 'react';
import swagService from '../../services/swagService';
import CollectionPreview from '../CollectionPreview/CollectionPreview.cmp'


import './collectionoverview.styles.scss'


const CollectionOverview = () => {
    const [shopItemList, setShopItemList] = useState([]);

    useEffect(() => {
        swagService.queryShopData().then(data => setShopItemList(data))
    }, [])

    return (
        <div className="collection-overview">
            {
                shopItemList.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    )
}

export default CollectionOverview;