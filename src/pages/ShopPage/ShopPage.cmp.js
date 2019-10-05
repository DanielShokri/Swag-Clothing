import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../store/shop/shopActions'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import WithSpinner from '../../components/WithSpinner/WithSpinner'
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.cmp';
import CollectionPage from '../CollectionPage/CollectionPage'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            setIsLoading(false);
        })
    }, [])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />)} />
            <Route path={`${match.path}/:collectionId`} render={(props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />)} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);