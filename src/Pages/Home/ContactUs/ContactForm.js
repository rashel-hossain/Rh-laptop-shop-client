import React from 'react';
import contactbg from '../../../assets/cantacbg/contactbg.jpg'

const ContactForm = () => {
    return (
        <div className='mt-24'>
            <section className='py-6' style={{ background: `url(${contactbg})` }}>
                <div className='flex justify-center items-center'>
                    <form>
                        <div>
                            <h4 className='text-lg text-white font-bold text-center'>Contact Us</h4>
                            <h2 className='text-2xl text-white text-center mb-6'>Stay connected with us</h2>
                            <div className='mx-2'>
                                <input type="email" placeholder="email address" className="input input-bordered input-primary w-full mr-2" />
                                <input type="text" placeholder="subject" className="input input-bordered input-primary w-full my-2" />
                            </div>
                            <div className='mx-2'>
                                <textarea className="w-full textarea textarea-primary" placeholder="write your message...."></textarea>
                            </div>
                            <div className='flex justify-center my-2'>
                                <button className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div >
    );
};

export default ContactForm;