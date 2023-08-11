import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-white bg-violet-900 p-5 mt-24'>
            <footer className="footer">
                <div>
                    <h1 className='text-white text-3xl font-extrabold'>RH-Laptop-Shop</h1>
                    <p>Providing reliable tech since 2020</p>
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
                <p className='text-center mt-10 mb-2'>Copyright © 2022-All right reserved by RH-Laptop-Shop</p>
            </div>
        </div>
    );
};

export default Footer;