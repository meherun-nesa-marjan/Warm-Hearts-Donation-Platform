import React from 'react';

const Footer = () => {
    return (
        <div className="bg-white text-black p-10">
          <div className="text-center mx-16">
            <div className="lg:w-4/5 w-full mx-auto">
            <div className="hero-content text-center ">
                <div className="">
                   <h1  className="font-bold text-2xl my-4">W.Clothing Donation  </h1>
                   <p>This Donation Platform is connect kind-hearted donors with individuals in need of warm clothing during the harsh winter months across Bangladesh.</p> 
                </div>
            </div>
            <hr/>
             
            <footer className="footer flex justify-between p-10">
                
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Request Help</a>
                    <a className="link link-hover">Success Stories</a>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Blog</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Volunteer Opportunities</a>
                   
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            </div>
        </div>
      </div>
    );
};

export default Footer;