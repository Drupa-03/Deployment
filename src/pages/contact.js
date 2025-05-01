import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center mx-auto mt-6">
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>
        <h1 className="text-2xl uppercase text-[#1B577E] text-center font-bold md:text-3xl">
          &nbsp;contact us&nbsp;
        </h1>
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>
      </div>

      {/* Subheading */}
      <p className="text-gray-500 text-center text-sm md:text-lg mt-5 px-4 md:px-32 tracking-tight">
        Get in touch, send us an e-mail or call us
      </p>

      {/* Three Div Layout */}
    <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 px-4 md:px-20 mt-10">
        <div className="w-full md:w-1/2 bg-[#f7fbfe] p-6 rounded-lg">
        <FontAwesomeIcon icon={faLocationDot} className="text-[#1B577E] items-center" />
            <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
            Our Address
            </h2>
            <p className="text-sm text-gray-600">
            2nd Floor, Bhayani Skyline, 202 Atabhai Rd, opp. Jogger's park, Sardar Nagar
            Bhavnagar, Gujarat 364002.
            </p>
        </div>

        <div className="w-full md:w-1/4 bg-[#f7fbfe] p-6 rounded-lg">
        <FontAwesomeIcon icon={faEnvelope} className="text-[#1B577E]" />
            <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
            
            Email Us
            </h2>
            <p className="text-sm text-gray-600">support@softwingz.com</p>
        </div>

        <div className="w-full md:w-1/4 bg-[#f7fbfe] p-6 rounded-lg">
        <FontAwesomeIcon icon={faPhone} className="text-[#1B577E]" />
            <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
            
            Call Us
            </h2>
            <p className="text-sm text-gray-600">+91 9023909022</p>
        </div>
    </div>

    </div>
  );
}

export default Contact;
