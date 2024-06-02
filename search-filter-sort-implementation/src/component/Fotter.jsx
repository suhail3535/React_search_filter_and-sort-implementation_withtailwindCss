import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <p>© 2024 Your Company. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/about" className="hover:text-gray-400">About Us</a>
                    <a href="/contact" className="hover:text-gray-400">Contact</a>
                    <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
