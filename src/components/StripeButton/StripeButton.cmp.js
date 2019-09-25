import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_rVAsEtXDcjGDauEwdpe4c4x000ZolYdF7y';

    const onToken = token => {
        console.log(token)
        toast.success('Your clothes is on their way! 🥳 ')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="SWAG. Clothing"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            value={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey} />
    )
}

export default StripeCheckoutButton;