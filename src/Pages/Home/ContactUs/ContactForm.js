import React from 'react';
import contactbg from '../../../assets/cantacbg/contactbg.jpg'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.target;
        emailjs.sendForm('service_35jgedh', 'template_hqaewko', e.target, 'ZIrCbNO-wt-1eykJI');
        toast.success("Success fully send");
        form.reset();
    }

    return (
        <div className='mt-24'>
            <section className='py-6' style={{ background: `url(${contactbg})` }}>
                <div className='flex justify-center items-center'>
                    <form onSubmit={sendEmail}>
                        <div>
                            <h4 className='text-2xl text-white font-bold text-center'>Contact Us</h4>
                            <h2 className='text-lg text-white text-center mb-6'>Stay connected with us</h2>
                            <div className='mx-2'>
                                <input type="email" name='email_form' id='emailForm' placeholder="Your Email Address" className="input input-bordered input-primary w-full mr-2" />
                                <input type="text" name="subject" id='subject' placeholder="Subject" className="input input-bordered input-primary w-full my-2" />
                            </div>
                            <div className='mx-2'>
                                <textarea name='message' id='message' className="w-full textarea textarea-primary" placeholder="Write your message...."></textarea>
                            </div>
                            <div className='flex justify-center my-2'>
                                <button className='btn btn-primary'>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div >
    );
};

export default ContactForm;