import React from 'react';
import InstagramIcon from '../../../assets/instagram.png'; 
import FacebookIcon from '../../../assets/facebook.png';
import XIcon from '../../../assets/instagram.png';

const Footer = () => {
  return (
    
    <footer className="w-full bg-[#244D3F] text-white pt-20 pb-10 mt-10">
      
      
      <div className="container mx-auto max-w-275 px-6">
        
        
        <div className="flex flex-col items-center text-center">
          
          <h2 className="text-[60px] leading-15font-bold mb-4 w-100 h-15 flex items-center justify-center">
            KeenKeeper
          </h2>
          
          <p className="text-[16px] font-normal text-white/80 max-w-175">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center mt-12 mb-16">
          
          <h3 className="text-[20px] font-medium text-white mb-6">Social Links</h3>
          
          
          <div className="flex items-center gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 flex items-center justify-center transition hover:scale-105">
              <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 flex items-center justify-center transition hover:scale-105">
              <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 flex items-center justify-center transition hover:scale-105">
              <img src={XIcon} alt="X (Twitter)" className="w-6 h-6" />
            </a>
          </div>
        </div>

       
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-[14px] text-white/70 gap-4">
            
            
            <p>
              &copy; {new Date().getFullYear()} KeenKeeper. All rights reserved.
            </p>

            
            <div className="flex flex-wrap items-center gap-x-6  justify-center">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;