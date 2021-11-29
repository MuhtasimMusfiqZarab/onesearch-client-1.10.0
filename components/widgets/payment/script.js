export function stripePaymentMethodHandler(result) {
  if (result.error) {
    // Show error in payment form
  } else {
    // Otherwise send paymentMethod.id to your server (see Step 4)
    fetch('/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        payment_method_id: result.paymentMethod.id
      })
    }).then(function (result) {
      // Handle server response (see Step 4)
      result.json().then(function (json) {
        handleServerResponse(json);
        console.log('This is the JSON', json);
      });
    });
  }
}
export function handleServerResponse(response) {
  if (response.error) {
    // Show error from server on payment form
  } else if (response.requires_action) {
    // Use Stripe.js to handle required card action
    stripe.handleCardAction(response.payment_intent_client_secret).then(handleStripeJsResult);
  } else {
    // Show success message
  }
}

export function handleStripeJsResult(result) {
  if (result.error) {
    // Show error in payment form
  } else {
    // The card action has been handled
    // The PaymentIntent can be confirmed again on the server
    fetch('/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_intent_id: result.paymentIntent.id })
    })
      .then(function (confirmResult) {
        return confirmResult.json();
      })
      .then(handleServerResponse);
  }
}
