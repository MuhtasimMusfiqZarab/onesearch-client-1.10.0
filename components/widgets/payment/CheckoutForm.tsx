import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { stripePaymentMethodHandler } from './script';

import CardSection from './CardSection';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    //payment method creation result his created for generating payment method with it using types
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        // Include any additional collected billing details.
        name: 'Jenny Rosen'
      }
    });

    //payment method is passed here with result
    //calling two endpoints for getting the payment intent id & with that finalizing the charge
    stripePaymentMethodHandler(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button type="submit" disabled={!stripe}>
        Submit Payment
      </button>
    </form>
  );
}
