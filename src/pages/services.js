import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


export default function Services() {

    const testimonials = [
        {
          name: "Anil Shah",
          title: "entrypreneur",
          quote: "Simply Professionals",
          feedback:
            "The accessibility features you implemented have made a significant difference for users with disabilities. We're now fully compliant with accessibility guidelines and are inclusive for all users.",
          img: "/image/profile.jpg",
        },

        {
            name: "Anil Shah",
            title: "entrypreneur",
            quote: "Simply Professionals",
            feedback:
              "The accessibility features you implemented have made a significant difference for users with disabilities. We're now fully compliant with accessibility guidelines and are inclusive for all users.",
            img: "/image/profile.jpg",
          },

          {
            name: "Anil Shah",
            title: "entrypreneur",
            quote: "Simply Professionals",
            feedback:
              "The accessibility features you implemented have made a significant difference for users with disabilities. We're now fully compliant with accessibility guidelines and are inclusive for all users.",
            img: "/image/profile.jpg",
          },

          {
            name: "Anil Shah",
            title: "entrypreneur",
            quote: "Simply Professionals",
            feedback:
              "The accessibility features you implemented have made a significant difference for users with disabilities. We're now fully compliant with accessibility guidelines and are inclusive for all users.",
            img: "/image/profile.jpg",
          },

          {
            name: "Anil Shah",
            title: "entrypreneur",
            quote: "Simply Professionals",
            feedback:
              "The accessibility features you implemented have made a significant difference for users with disabilities. We're now fully compliant with accessibility guidelines and are inclusive for all users.",
            img: "/image/profile.jpg",
          },
        
      ];
  return (
    
    <div className="max-w-7xl mx-auto px-4 py-10">

     <div className="flex justify-center mx-auto mt-6">
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>
        <h1 className="text-2xl uppercase text-[#1B577E] text-center font-bold md:text-3xl">&nbsp;Services we offer&nbsp;</h1>
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>      
     </div>
      <p className="text-center text-sm text-gray-500 tracking-wide mt-2">Simple solutions for complicated times</p>
      <div className="grid gap-8 md:grid-cols-3">
        
        {/* Card 1 */}
        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-start mt-10 group transition">
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-800 rounded-full transform scale-0 group-hover:scale-[100] transition-transform duration-1000 ease-out z-0" />

            <div className="relative z-10 flex items-center text-left mb-6 py-4">
                <Image src="/image/1.png" alt="Flutter" width={80} height={80} className="mr-4" />
                <p className="text-gray-700 group-hover:text-white text-2xl font-bold">App Development</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/a.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Flutter</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/b.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Android App</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/c.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">IOS App</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/d.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Kotlin</p>
            </div>

            <div className="relative z-10 flex items-center ml-6 gap-8">
                <Image src="/image/e.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">React Native</p>
            </div>
        </div>


        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-start mt-10 group transition">
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-800 rounded-full transform scale-0 group-hover:scale-[100] transition-transform duration-1000 ease-out z-0" />

            <div className="relative z-10 flex items-center text-left mb-6 py-4">
                <Image src="/image/2.png" alt="Flutter" width={80} height={80} className="mr-4" />
                <p className="text-gray-700 group-hover:text-white text-2xl font-bold">Web Development</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/h.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">PHP</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/a.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Wordpress</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/i.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Flutter</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/j.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Python</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/magento.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Magento</p>
            </div>

            <div className="relative z-10 flex items-center ml-6 gap-8">
                <Image src="/image/react-js.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">React JS</p>
            </div>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-start mt-10 group transition">
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-800 rounded-full transform scale-0 group-hover:scale-[100] transition-transform duration-1000 ease-out z-0" />

            <div className="relative z-10 flex items-center text-left mb-6 py-4">
                <Image src="/image/f.png" alt="Flutter" width={80} height={80} className="mr-4" />
                <p className="text-gray-700 group-hover:text-white text-2xl font-bold">Desktop Application</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/j.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Python</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/a.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Flutter</p>
            </div>
        </div>

      </div>

      <div className="grid gap-8 md:grid-cols-3">


      <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-start mt-10 group transition">
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-800 rounded-full transform scale-0 group-hover:scale-[100] transition-transform duration-1000 ease-out z-0" />

            <div className="relative z-10 flex items-center text-left mb-6 py-4">
                <Image src="/image/4.png" alt="Flutter" width={80} height={80} className="mr-4" />
                <p className="text-gray-700 group-hover:text-white text-2xl font-bold">IOT & Embedded</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/k.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">IOT Apps</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/n.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Embedded Software</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/o.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">IoT Hardware Prototyping</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/m.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Iot Software $ Analytics</p>
            </div>
        </div>

        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-start mt-10 group transition">
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-800 rounded-full transform scale-0 group-hover:scale-[100] transition-transform duration-1000 ease-out z-0" />

            <div className="relative z-10 flex items-center text-left mb-6 py-4">
                <Image src="/image/5.png" alt="Flutter" width={80} height={80} className="mr-4" />
                <p className="text-gray-700 group-hover:text-white text-2xl font-bold">Digital Marketing</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/r.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Social Media Marketing</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/t.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Market Place Listing</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/u.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Business Listing</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/v.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Survey</p>
            </div>
        </div>

        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-start mt-10 group transition">
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-800 rounded-full transform scale-0 group-hover:scale-[100] transition-transform duration-1000 ease-out z-0" />

            <div className="relative z-10 flex items-center text-left mb-6 py-4">
                <Image src="/image/6.png" alt="Flutter" width={80} height={80} className="mr-4" />
                <p className="text-gray-700 group-hover:text-white text-2xl font-bold">API</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/p.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Whatsapp E-commerce</p>
            </div>

            <div className="relative z-10 flex items-center mb-4 ml-6 gap-8">
                <Image src="/image/q.svg" alt="Flutter" width={24} height={24} className="mr-2" />
                <p className="text-gray-700 group-hover:text-white text-lg font-bold">Custom API</p>
            </div>
        </div>
      </div>

      <div>
      <div className="flex justify-center mx-auto mt-6">
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>
        <h1 className="text-2xl uppercase text-[#1B577E] text-center font-bold md:text-3xl">&nbsp;Process We Follow&nbsp;</h1>
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>      
     </div>

  <div className="grid gap-8 md:grid-cols-4">
        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-center mt-10 group transition border-b-11 border-r-5 rounded-2xl" style={{ borderColor: '#1B577E' }}>
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/11.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">1. Business Analysis</p>
            <p className="text-sm mt-6">
            Identify core business aspects & growth opportunities while assessing competitor strategies, 
            it helps uncover the organization's nature & potential for expansion.
            </p>
        </div>
        </div>

        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-center mt-10 group transition border-b-11 border-r-5 rounded-2xl" style={{ borderColor: '#1B577E' }}>
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/12.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">2. Requirement Gathering</p>
            <p className="text-sm mt-6">
            We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.
            </p>
        </div>
        </div>

        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-center mt-10 group transition border-b-11 border-r-5 rounded-2xl" style={{ borderColor: '#1B577E' }}>
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/13.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">3.UI/UX Design</p>
            <p className="text-sm mt-6">
            We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.
            </p>
        </div>
        </div>

        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-center mt-10 group transition border-b-11 border-r-5 rounded-2xl" style={{ borderColor: '#1B577E' }}>
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/14.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">4.Prototype</p>
            <p className="text-sm mt-6">
            After designing, you will get your prototype, which will be sent ahead for the development process for the product.
            </p>
        </div>
    
    </div>

  </div>

  <div className="grid gap-8 md:grid-cols-4">
        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-center mt-10 group transition border-b-11 border-r-5 rounded-2xl" style={{ borderColor: '#1B577E' }}>
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/15.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">5. Development</p>
            <p className="text-sm mt-6">
            Development of mobile application/web/blockchain started using latest tools and technologies with transparency.
            </p>
        </div>
        </div>

        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-center mt-10 group transition border-b-11 border-r-5 rounded-2xl" style={{ borderColor: '#1B577E' }}>
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/16.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">6. Quality Assurance</p>
            <p className="text-sm mt-6">
            SoftWingz values quality and provides 100% bug free application with no compromisation in it.
            </p>
        </div>
        </div>

        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-center mt-10 group transition border-b-11 border-r-5 rounded-2xl" style={{ borderColor: '#1B577E' }}>
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/17.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">7.Deployment</p>
            <p className="text-sm mt-6">
            After trial and following all processes, your app is ready to launch on the App store or Play Store.
            </p>
        </div>
        </div>

        <div className="relative overflow-hidden shadow-lg p-6 flex flex-col items-center mt-10 group transition border-b-11 border-r-5 rounded-2xl" style={{ borderColor: '#1B577E' }}>
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/18.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">8.Support & Maintenance</p>
            <p className="text-sm mt-6">
            Our company offers you all support and the team is always ready to answer every query after deployment.
            </p>
        </div>
    
    </div>

  </div>

    <div className="flex justify-center mx-auto mt-40 ">
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>
        <h1 className="text-2xl uppercase text-[#1B577E] text-center font-bold md:text-3xl">&nbsp;Industries We Serve&nbsp;</h1>
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>         
    </div>
    <p className="text-sm text-gray-500 text-center mt-4">Here, we make almost every genre of applications. You name it and we build it.</p>

  <div className="grid gap-8 md:grid-cols-6 mx-10 ">
        <div className="relative overflow-hidden border border-gray-300 w-48 h-50 p-6 flex flex-col items-center mt-10 shadow-2xl rounded-3xl">
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/first.png" alt="Flutter" width={80} height={80} className="mb" />
            <p className="text-gray-700 text-lg font-bold">Education & E-learning</p>
            
        </div>
        </div>

        <div className="relative overflow-hidden border border-gray-300 w-48 h-50 shadow-2xl p-6 flex flex-col items-center mt-10 rounded-3xl">
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/second.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">Retail, Ecommerce</p>
            
        </div>
        </div>

        <div className="relative overflow-hidden border border-gray-300 w-48 h-50 shadow-2xl p-6 flex flex-col items-center mt-10 rounded-3xl">
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/third.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">Social Networking</p>
            
        </div>
        </div>

        <div className="relative overflow-hidden border border-gray-300 w-48 h-50 shadow-2xl p-6 flex flex-col items-center mt-10 rounded-3xl">
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/fourth.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">On-Demand Solutions</p>
            
        </div>    
        </div>

        <div className="relative overflow-hidden border border-gray-300 w-48 h-50 shadow-2xl p-6 flex flex-col items-center mt-10 rounded-3xl">
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/fifth.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">Food & Restaurant</p>
            
        </div>    
        </div>

        <div className="relative overflow-hidden border border-gray-300 w-48 h-50 shadow-2xl p-6 flex flex-col items-center mt-10 rounded-3xl">
        <div className="relative z-10 flex flex-col items-center text-center mb-2 py-4">
            <Image src="/image/six.png" alt="Flutter" width={80} height={80} className="mb-4" />
            <p className="text-gray-700 text-lg font-bold">Entertainment Industry</p>
            
        </div>    
        </div>

  </div>

      </div>

      

      <div className="px-2 py-20 mt-20 bg-[#f7fbfe] ">
      <div className="flex justify-center mx-auto mt-6">
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>
        <h1 className="text-2xl uppercase text-[#1B577E] text-center font-bold md:text-3xl">&nbsp;Testimonials&nbsp;</h1>
        <span className="inline-block w-10 h-1 mt-4 bg-orange-600"></span>      
     </div>
      <p className="text-center text-sm text-gray-500 tracking-wide mt-2">We hear you!</p>
  <Swiper
    slidesPerView={1}
    spaceBetween={20}
    autoplay={{ delay: 3000 }}
    loop={true}
    modules={[Autoplay]}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 }
    }}
  >
    {testimonials.map((t, idx) => (
      <SwiperSlide key={idx}>
        <div className="relative w-[85%] mx-auto shadow-lg  bg-white px-6  h-full flex flex-col justify-start mt-40">
          
          {/* Floating Image */}
          <div className="absolute  -left-6 pt-5">
            <Image
              src={t.img}
              alt={t.name}
              width={60}
              height={60}
              className="border-4 border-white shadow-md"
            />
          </div>

          {/* Card Content */}
          <h1 className="text-black text-lg font-semibold mt-2 ml-8">{t.name}</h1>
          <p className="text-sm text-gray-500 ml-8">{t.title}</p>
          <FontAwesomeIcon icon={faQuoteLeft} className="text-blue-100 mt-1 text-2xl self-start ml-8" />
          <p className="text-black text-lg font-medium mt-6 flex items-start gap-2 ml-8">
            
            <span className="flex-1 ">{t.quote}</span>
            
          </p>
          <p className="text-lg text-gray-500 ml-8 ">{t.feedback}&nbsp;
          <FontAwesomeIcon icon={faQuoteRight} className="text-blue-100 text-2xl ml-8 " />
          </p>
          
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

</div>
  );
}
