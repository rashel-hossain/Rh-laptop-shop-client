import React from 'react';
import Review from './Review';
import person1 from '../../../assets/reviewperson/person1.jpg'
import person2 from '../../../assets/reviewperson/person2.jpg'
import person3 from '../../../assets/reviewperson/person3.jpg'

const Reviews = () => {
    const reviewsData = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'I am really staisfied for this site. It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using shop here.',
            location: 'New York',
            img: person1
        },
        {
            _id: 2,
            name: 'Rasel Hossain',
            review: 'Excellent gateway various laptop. It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using shop here.',
            location: 'Bangladesh',
            img: person2
        },
        {
            _id: 3,
            name: 'Zahidul Anik',
            review: 'Really helful site for everyone. It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using shop here.',
            location: 'Singapur',
            img: person3
        },
    ]
    return (
        <section className='my-16 mt-24'>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <h4 className='text-md text-primary font-bold'>Review Buyer and Seller</h4>
                        <h2 className='text-2xl'>What Our Buyer and Seller Says</h2>
                    </div>
                    <figure>
                        {/* <img className='w-24 lg:w-48' src={quote} alt="" /> */}
                    </figure>
                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        reviewsData.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;