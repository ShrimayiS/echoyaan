// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold">Company</h3>
          <ul>
            <li><a href="/about-us" className="hover:text-yellow-300 transition-colors">About Us</a></li>
            <li><a href="/sell-on-ecoyaan" className="hover:text-yellow-300 transition-colors">Sell on Ecoyaan</a></li>
            <li><a href="/careers" className="hover:text-yellow-300 transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Links</h3>
          <ul>
            <li><a href="/privacy-policy" className="hover:text-yellow-300 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:text-yellow-300 transition-colors">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <div className="flex space-x-2">
            <a href="https://instagram.com" className="hover:text-yellow-300 transition-colors">Instagram</a>
            <a href="https://linkedin.com" className="hover:text-yellow-300 transition-colors">LinkedIn</a>
            <a href="https://facebook.com" className="hover:text-yellow-300 transition-colors">Facebook</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Subscribe</h3>
          <p>Receive updates on blogs, future launches, and more!</p>
          <input type="email" placeholder="Your Email Address" className="mt-2 p-2 w-full rounded" />
          <button className="bg-white text-green-600 mt-2 p-2 w-full rounded hover:bg-gray-200 transition-colors">Subscribe</button>
        </div>
      </div>
      <div className="border-t border-white mt-8 pt-4 text-center text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold">Registered Address:</h4>
            <p>1-N-12T-781/1 Sri Krishna Vilasa, Urvastores, Ashoknagar(MR), Mangalore, Dakshina Kannada- 575006, Karnataka, India</p>
          </div>
          <div>
            <h4 className="font-bold">Legal Business Name:</h4>
            <p>Kindkarma E-Retail Private Limited</p>
            <p>CIN: U47912KA2023PTC182592</p>
            <p>Telephone: +91 9980490777</p>
          </div>
        </div>
        <div className="mt-4">
          &copy; 2023 - 2024, Ecoyaan TM
        </div>
      </div>
    </footer>
  );
};

export default Footer;
