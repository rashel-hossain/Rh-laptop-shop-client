import React from 'react';
import BigSale from '../../../../src/assets/OfferImg/BigSale.png'

const BigOffer = () => {
    return (
        <section className='mx-10 mt-16'>
            <div>
                <div className='text-left'>
                    <h3 className='text-3xl font-bold uppercase text-red-500'>Current Big Sale</h3>
                    <h2 className='text-2xl font-semibold mb-15'>New Year 2023</h2>
                </div>
                <figure><img className='rounded-xl' src={BigSale} alt="offer" /></figure>
            </div>
        </section>
    );
};

export default BigOffer;