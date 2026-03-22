import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16 px-4 md:px-8 lg:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand Information */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">
            BigBoss Collection
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Leading the fashion industry with premium collections, exclusive deals, and unmatched quality. Dress like a boss, live like a boss.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500"></span>
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500"></span>
                Best Sellers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500"></span>
                Sale & Offers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500"></span>
                Shop by Collections
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Customer Care</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500"></span>
                Track Your Order
              </Link>
            </li>
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500"></span>
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500"></span>
                Shipping Information
              </Link>
            </li>
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500"></span>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <MapPin className="text-amber-500 mt-1" size={20} />
              <span className="text-zinc-400 text-sm">
                123 Fashion Avenue, Style District <br /> New York, NY 10001
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-amber-500" size={20} />
              <span className="text-zinc-400 text-sm">+1 (800) 123-4567</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-amber-500" size={20} />
              <span className="text-zinc-400 text-sm">support@bigbosscollection.com</span>
            </li>
          </ul>

          <div className="mt-6">
            <h5 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h5>
            <div className="flex h-10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-900 border border-zinc-700 text-sm text-white px-4 py-2 flex-1 rounded-l-md focus:outline-none focus:border-amber-500 transition-colors"
                aria-label="Email address for newsletter"
              />
              <button 
                type="button"
                className="bg-amber-500 hover:bg-amber-600 text-zinc-950 px-4 font-semibold text-sm rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} BigBoss Collection. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Terms of Service</Link>
          <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
