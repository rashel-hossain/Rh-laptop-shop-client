import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();

    const { price, productTitle } = booking;

    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }


    return (
        <div>
            <h3 className='text-3xl'>Payment for <strong className='text-green-500'>{productTitle}</strong></h3>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your.</p>
            <div className='w-96 my-12 mx-12 p-4 h-48 bg-pink-700 text-white bordered-4 rounded '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;