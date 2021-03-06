/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51J0WfmGj8vqypO5QiJLKZVitj7RUmsKQQuYo1Jd48zPcAXhGyASYDWls861fdnwIFbs8wXtOeL20FDKwM5ADxVbi00NSCB0M9B'
    );
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
