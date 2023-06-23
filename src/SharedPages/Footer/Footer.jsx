import React from 'react';

const Footer = () => {
    
    return (
        <>
            <footer className="footer p-10 bg-[#C07F00] text-white mt-20">
                <div>
                    <h2 className='font-semibold text-xl'>KidZtoys</h2>
                    <p>KidZtoys Ltd.<br />Providing best toys since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Contact us</span>
                    <a className="link link-hover">Email: info@kidztoys.com</a>
                    <a className="link link-hover">Phone: +1 (555) 123-4567</a>
                    <a className="link link-hover">Telephone: (555) 867-5309</a>

                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <a className="link link-hover">
                        Address1: Oak Street,
                        San Francisco,<br /> CA 94107</a>
                    <a className="link link-hover">Address2: 321 Pine Avenue,
                        Brooklyn,<br/> NY 10001,
                        United States</a>
                    
                </div>
            </footer>
            <div className='bg-[#C07F00] text-white text-center pb-5'>
                <p><small>© 2023 KidZtoys. All rights reserved.</small></p>
            </div>
        </>

    );
};

export default Footer;