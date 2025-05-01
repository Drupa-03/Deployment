import React from 'react'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-40">
      {/* Changed from mx-40 to more responsive padding */}
      <div className="container px-4 sm:px-6 mx-auto">
        
        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Main footer content with responsive layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Left column - logo and social icons */}
          <div className="w-full lg:w-2/5">
            <div className="px-2 sm:px-32 py-6 sm:py-20 flex flex-col items-left sm:items-start">
              {/* <a>
                <img alt="azziptech logo" src="/image/logo.png" loading="lazy" width="150" height="80" className="w-auto h-8 sm:h-10 md:h-12" />
              </a> */}
              <a>
                <p className="max-w-sm mt-2 font-semibold text-black dark:text-gray-400 text-center sm:text-left">
                  Do not forgot us to follow on social media..!!
                </p>
              </a>
              <div className="flex justify-start sm:justify-start mt-4 sm:mt-6 space-x-4">
                <a className="text-gray-600 dark:text-white hover:text-blue-500">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a className="text-gray-600 dark:text-white hover:text-blue-500">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                  </svg>
                </a>             
                <a className="text-gray-600 dark:text-white hover:text-blue-500">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a className="text-gray-600 dark:text-white hover:text-blue-500">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column with background image - using relative/absolute positioning */}
          <div className="relative mt-4 lg:mt-0 lg:flex-1 py-8 sm:py-12">
            {/* Background image applied only to right side */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: "url('/image/footer-bg.png')" }}>
            </div>
            
            {/* Content overlaid on the background - reorganized for mobile */}
            <div className="relative z-10 grid grid-cols-1 gap-6 p-4 sm:p-6">
              {/* On small screens: 2 columns for useful links and services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Useful Links */}
                <div className="text-left">
                  <h1 className="text-blue-900 uppercase dark:text-white font-semibold">useful links</h1>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    Home
                  </p>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    About US
                  </p>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    Services
                  </p>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    Team
                  </p>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    Contact
                  </p>
                </div>

                {/* Our Services */}
                <div className="text-left">
                  <h1 className="text-blue-900 uppercase dark:text-white font-semibold">our services</h1>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    App Development
                  </p>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    Web Development
                  </p>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    Desktop Application
                  </p>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    IOT & Embedded
                  </p>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    Digital Marketing
                  </p>
                  <p className="flex items-center mt-2 text-sm text-black dark:text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-orange-500 hover:text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    API
                  </p>
                </div>

                {/* Contact Us - centered on smaller screens */}
                <div className="text-center sm:text-center md:text-left md:mx-auto  mx-auto">
  <h1 className="text-blue-900 uppercase dark:text-white font-semibold">contact us</h1>
  <p className="block mt-2 text-sm text-black dark:text-gray-400">2nd floor, bhayani skyline, 202</p>
  <p className="block mt-2 text-sm text-black dark:text-gray-400">Atabhai Rd, opp. jogger's park, Sardar Nagar</p>
  <p className="block mt-2 text-sm text-black dark:text-gray-400"><span className="font-bold">Phone:</span> +91 9023909022</p>
  <p className="block mt-2 text-sm text-black dark:text-gray-400"><span className="font-bold">Email:</span> support@softwingz.com</p>
</div>


              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <hr className="border-gray-200 dark:border-gray-700 mt-6" />
        <div className="py-4 sm:py-6">
          <p className="text-center text-sm sm:text-base text-[#012970] dark:text-gray-400">© Copyright <span className="font-bold">SOFTWINGZ INFOTECH.</span> All Rights Reserved</p>
          <p className="text-center text-sm sm:text-base text-blue-500 dark:text-gray-400 hover:text-gray-500">Designed & Developed by SOFTWINGZ INFOTECH</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer