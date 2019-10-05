
export default {
    querySections,

    deleteItemFromCart,
    addItemToCart,
    removeItemFromCart,
    // getShopCollection,
}

const sections = [
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }
];


function querySections() {
    return Promise.resolve(sections);
}

// function getShopCollection(collectionName) {
//     const collectionNameToId = {
//         hats: 1,
//         sneakers: 2,
//         jackets: 3,
//         womens: 4,
//         mens: 5
//     }
//     const collectionToReturn = SHOP_DATA.find(data => data.id === collectionNameToId[collectionName])
//     return Promise.resolve(collectionToReturn)
// }

function addItemToCart(cartItems, cartItemToAdd) {
    const exitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (exitingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        })
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

}

function deleteItemFromCart(cartItems, itemToDelete) {
    const filteredItems = cartItems.filter(item => item.id !== itemToDelete.id);
    return filteredItems
}

function removeItemFromCart(cartItems, cartItemToRemove) {
    const exitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (exitingCartItem.quantity === 1) return cartItems;

    return cartItems.map(cartItem => (
        cartItem.id === cartItemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    ))
}