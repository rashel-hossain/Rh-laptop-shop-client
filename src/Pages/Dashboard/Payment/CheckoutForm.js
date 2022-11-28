import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { price, buyerEmail, phone, _id } = booking;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://laptop-shop-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);

        // '{PAYMENT_INTENT_CLIENT_SECRET}'
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        phone: phone,
                        email: buyerEmail,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        // console.log('PaymentIntent', paymentIntent);

        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            setSuccess('Congrates! your payment completed.');
            setTransactionId(paymentIntent.id);

            // create object and load or response server side api /payments
            const payments = {
                price,
                transactionId: paymentIntent.id,
                buyerEmail,
                bookingId: _id
            }

            fetch('https://laptop-shop-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payments)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrates! your payment completed.');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#FFFFFF',
                                '::placeholder': {
                                    color: '#FFFFFF',
                                },
                            },
                            invalid: {
                                color: '#FFFFFF',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-yellow-400'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-400 font-bold'>{success}</p>
                    <p className='text-white'>Your transactionId: <span className='text-sm font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;