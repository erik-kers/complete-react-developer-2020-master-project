import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H35bJF90o7XcQqXhOv9PgDLNmcQp3G9HMfHvd2slL4oxPXg5yrOQ2hopu3iSnMkjhwmsOaqg9d5yABaFGxzJonm00S7MtSn8d';

  const onToken = token => alert('Payment successful');

  return (
    <StripeCheckout 
      label='Pay now'
      name='CRWN Clothing ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
