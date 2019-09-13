import React, { useState, useEffect } from 'react';
import swagService from '../../services/swagService';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.cmp'


const ShopPage = () => {
    const [shopItemList, setShopItemList] = useState([]);

    useEffect(() => {
        swagService.queryShopData().then(data => setShopItemList(data))
    }, [])

    return(
        <div className="shop-page">
            {
                shopItemList.map(({id, ...otherProps}) =>(
                    <CollectionPreview key={id} {...otherProps}/>
                ))
            }
        </div>
    )
}

export default ShopPage;