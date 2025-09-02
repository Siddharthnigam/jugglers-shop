import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="font-bold text-xl">Jugglers</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Bringing you affordable, style-inspired fashion for the modern Indian wardrobe. 
              Quality clothing at juggler-level prices that make sense.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/shop" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Shop All
              </Link>
              <Link to="/shop?category=Shirts" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Shirts
              </Link>
              <Link to="/shop?category=T-Shirts" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                T-Shirts
              </Link>
              <Link to="/shop?category=Jeans" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Jeans
              </Link>
              <Link to="/shop?category=Dresses" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Dresses
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/size-guide" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Size Guide
              </Link>
              <Link to="/shipping" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Shipping Info
              </Link>
              <Link to="/returns" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Returns & Exchange
              </Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Freeganj, Ujjain<br />
                  Madhya Pradesh 456010<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+91 7415159952</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">jugglers.shop@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Jugglers. All rights reserved. Made in India 🇮🇳 <br /> Created By Siddharth Nigam 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;