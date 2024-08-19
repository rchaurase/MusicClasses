import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>
            About Us
          </h2>
          <p className='mb-4 mr-8'>
          At Harmony Music Academy, we believe that music is a universal language that transcends boundaries and connects people.
          </p>
        </div>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>
            Quick Links
          </h2>
          <ul>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>
                Home
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>
                About
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>
                Courses
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>
            Follow us
          </h2>
          <ul>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>
            Contact Us
          </h2>
          <p>
            Bhopal, India
          </p>
          <p>Bhopal,480551</p>
          <p>Email:info@33gmail.com</p>
        </div>
      </div>
      <p className='text-center text-xs pt-8 '>
        © 2024 Harmoney Mysic Academy. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
