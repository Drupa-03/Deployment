import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex justify-center mx-auto mt-6">
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>
        <h1 className="text-2xl uppercase text-[#1B577E] text-center font-bold md:text-3xl">&nbsp;About us&nbsp;</h1>
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>      
      </div>
      <p className="text-2xl text-gray-600 text-center md:text-3xl mt-2">We are young but bold</p>
      <p className="text-gray-700 text-center text-[18px]  md:text-lg font-semibold mt-10 px-4 md:px-32 tracking-tight">SoftWingz is a leading IT company based in India that offers a wide range of technological solutions. Our team comprises highly skilled professionals who specialize in various technologies like Android, web development, IoT, and cloud function, among others.</p>

      <div className="flex flex-col md:flex-row justify-center items-center md:gap-8 lg:gap-10 ">
        {/* Image */}
        <div className="mt-6 md:mt-12 w-full md:w-1/2 px-4 md:px-8 lg:px-12">
          <Image
            src="/image/about.gif"
            alt="Softwings Logo"
            width={1000}
            height={1000}
            className="object-contain w-full h-auto"
          />
        </div>
        
        
        <div className="text-gray-600 text-center text-[18px] font-[400] mt-6 md:mt-10 px-4 w-full md:w-1/2 md:mr-24 ">
          <div>
            <p className="py-2">At SoftWingz, we understand the <span className="font-[700]">importance of data security</span> and take all necessary steps to ensure that your data and <span className="font-[700]"> platform are secured.
               We also focus on providing attractive and user-friendly UI/UX </span> to enhance your customers' experience.</p>
          </div>
          
          <p className="py-2">In addition to our core offerings, we also provide other services such as <span className="font-[700]"> listing your products on marketplaces and digital marketing to help expand your business reach.</span> We believe in providing
           our clients with a comprehensive IT solution, which is why we involve ourselves in the entire software life cycle, from market research to managing products.</p>

          <p className="py-2">Our team does not just develop platforms, but also conducts business analysis and market research to provide a better platform than your competitors. We also provide <span className="font-[700]"> regular maintenance services for your admin panel.</span>
           to ensure that your business runs smoothly.</p>

          <p className="py-2">At SoftWingz, our focus is on customer satisfaction. We strive to deliver projects on time and with the highest level of quality. <span className="font-[700]">  We are committed to providing the best and most innovative solutions for
          your business needs.</span></p>

          <p className="py-2">Partner with SoftWingz and experience the difference.<span className="font-[700]"> Contact us today to learn more about our services and how we can help you achieve your business goals.</span></p>
        </div>
      </div>
    </div>
  );
}