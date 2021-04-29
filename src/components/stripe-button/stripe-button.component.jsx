import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKep = 'pk_test_51IHYqeCewqdNP93GHJ9BNRltQZ2GXjCMiAzxvX6zLEL32YRIPTVtQtEdkIElwExfNBX1G5TK4GKwOb6YPdjClYpf00Juk8xIS5';

  const onToken = token => {
    // console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout 
      label='Pay Now'
      name= 'CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKep}
    />
  );
};

export default StripeCheckoutButton;