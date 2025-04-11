import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-700 text-white p-8'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 animate-fadeIn'>
          
          {/* Logo or BrandName */}
          <div className='text-2xl font-bold tracking-wider hover:text-blue-400 transition duration-300'>
            YourBand
          </div>

          {/* footer link */}
          <div className='flex space-x-6 text-sm'>
            <a href="#Header" className='hover:text-blue-400 transition duration-300'>Home</a>
            <a href="#Features" className='hover:text-blue-400 transition duration-300'>Features</a>
            <a href="#PricingCard" className='hover:text-blue-400 transition duration-300'>Pricing</a>
            <a href="#Contact" className='hover:text-blue-400 transition duration-300'>Contact</a>
          </div>

          {/* social media Icons */}
          <div className='flex space-x-4'>
            <a href="#" className='hover:scale-125 transform transition duration-300'>
            <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" />
            </a>

            <a href="#" className='hover:scale-125 transform transition duration-300'>
            <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" />
            </a>

            <a href="#" className='hover:scale-125 transform transition duration-300'>
            <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" />
            </a>
          </div>
      </div>

      {/* Bottom Text */}
      <div className='text-center text-gray-500 text-xs mt-8'>
      © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
