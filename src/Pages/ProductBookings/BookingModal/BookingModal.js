import React from 'react';
import toast from 'react-hot-toast';


const BookingModal = ({ products, setProducts, refetch }) => {

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const productTitle = form.productTitle.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const message = form.message.value;
        // console.log(productTitle, price, phone, message);

        const booking = {
            phone,
            price,
            productTitle: productTitle,
            message
        }
        console.log(booking);
        /*Here,
        01. First modal data we send to the server in POST in create api auto collection.
        02. Saved data when modal submit, then we get data other api in ('/myOrders')
        03. And show display ui in table success.
        */
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log('whyy not work???', data);
                if (data.acknowledged) {
                    setProducts(null);
                    toast.success("Your booking is confirmed");
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            });
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Model: {products?.productTitle}</h3>
                    <form onSubmit={handleBooking} className='grid gap-2 grid-cols-1 mt-6'>
                        <input name="productTitle" type="text" defaultValue={products?.productTitle} disabled placeholder="Your product model name" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={products?.reSellPrice} disabled placeholder="Your price" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="message" type="text" placeholder="Your Message..." className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;