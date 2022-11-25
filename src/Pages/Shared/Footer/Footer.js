import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-white bg-red-600 p-5 '>
            <footer className="footer">
                <div>
                    <img className='rounded-xl' src="/RhLaptopShop.PNG" alt="" />
                    <p>RH-Laptop-Shop<br />Providing reliable tech since 2020</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div>
                <p className='text-center mt-10 mb-2'>Copyright©2022-All right reserved by Doctors Portal Ltd.</p>
            </div>
        </div>
    );
};

export default Footer;