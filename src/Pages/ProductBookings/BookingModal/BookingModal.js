import React from 'react';


const BookingModal = ({ products, setProducts }) => {

    const handleBooking = event => {
        event.preventDefault();



    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"> </h3>
                    <form onSubmit={handleBooking} className='grid gap-2 grid-cols-1 mt-6'>


                        <input name="name" type="text" defaultValue={products?.productTitle} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={products?.reSellPrice} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;