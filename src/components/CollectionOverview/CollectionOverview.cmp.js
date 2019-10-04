import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../store/shop/shopSelectors'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../CollectionPreview/CollectionPreview.cmp'


import './collectionoverview.styles.scss'


const CollectionOverview = ({ collections }) => {

    return (
        <div className="collection-overview">
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);