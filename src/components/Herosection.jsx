import React, { useState } from 'react';
import { GoArrowRight, GoArrowUpRight } from 'react-icons/go';

const Herosection = () => {
  const contents = [
    {
      title: 'Discover the Secrets to  Luminous Skin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique ullamcorper ex, vitae consequat nisl ultrices.',
      buttonText: 'Shop Now',
      subtitle: 'For the beauty of youth',
    },
    {
      title: 'Discover The Secret Of Natural Beauty',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique ullamcorper ex, vitae consequat nisl ultrices.',
      buttonText: 'Shop Now',
      subtitle: '100% Organic Product',
    },
    {
      title: 'Care For Your Skin, Care For Your Beauty',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique ullamcorper ex, vitae consequat nisl ultrices.',
      buttonText: 'Shop Now',
      subtitle: 'The Perfect Skincare',
    },
  ];

  const images = [
    ["assets/image/img-1-8.webp", "assets/image/img-1-9.webp"],
    ["assets/image/img-1-13.webp", "assets/image/img-1-14.webp"],
    ["assets/image/img-1-15.webp", "assets/image/img-1-16.webp"],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const switchContent = (index) => {
    if (index !== currentIndex) {
      setAnimate(true); // trigger animation
      setTimeout(() => {
        setCurrentIndex(index);
        setAnimate(false); // reset animation after
      }, 300); // match your transition timing
    }
  };

  return (
    <>
      <div className="mx-auto  ">
        <div className="relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-stretch">
            
            {/* Left Image */}
            <img
              src={images[currentIndex][0]}
              className={`w-full md:w-1/3 h-64 md:h-auto object-cover shadow-lg image-animate ${animate ? 'animate-left' : ''}`}
              alt="left banner"
            />

            {/* Center Content */}
            <div className="relative w-full md:w-1/3 flex items-center justify-center bg-[#f0eef2] p-[1.5rem] py-8 md:py-0">
              <div className="text-center max-w-[90%] mx-auto">
                <p className="text-lg md:text-[1rem] tracking-[0px] text-[#444444] mb-[15px] uppercase">
                  {contents[currentIndex].subtitle}
                </p>
                <h1 className="text-2xl md:text-[39px] leading-[60px] font-bold text-[#222222]  mb-4">
                  {contents[currentIndex].title}
                </h1>
                <p className="text-[#666666] font-[500] mt-[15px]  text-sm md:text-[15px] font-[urbanist]">
                  {contents[currentIndex].description}
                </p>
                <button className="relative bg-[#ecdec1] hover:bg-[#b6713e] font-[urbanist] hover:text-neutral-50 text-center border-[#ecdec1] hover:border-[#b6713e] min-w-[150px] h-[52px] text-[#1c1c1c] btn btn-primary btn-normal mt-[30px] px-6 py-3 text-sm md:text-base">
                  {contents[currentIndex].buttonText}
                  <GoArrowUpRight className='absolute right-[20px] bottom-[16px] '/>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <img
              src={images[currentIndex][1]}
              className={`w-full md:w-1/3 h-64 md:h-auto object-cover shadow-lg image-animate ${animate ? 'animate-right' : ''}`}
              alt="right banner"
            />
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center space-x-3">
            {contents.map((_, index) => (
              <button
                key={index}
                onClick={() => switchContent(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 bottom-[2.5rem] left-[50%] -translate-x(-50%) rounded-full ${currentIndex === index ? 'bg-[#b6713e]' : 'bg-white hover:bg-[#b6713e]'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-[#fcf7ee] overflow-hidden py-4">
        <div className="flex items-center whitespace-nowrap animate-marquee hover:pause-marquee space-x-6 md:space-x-10 text-gray-800 font-medium text-base md:text-lg">
          <span>FREE SHIPPING</span> <span><i class="bi bi-circle w-6 h-6 font-[1.4rem]"></i></span>
          <span>SUPPORT 24/7</span> <span>•</span>
          <span>RETURN POLICY</span> <span>•</span>
          <span>SAVE MONEY</span> <span>•</span>
          <span>FREE SHIPPING</span> <span>•</span>
          <span>SUPPORT 24/7</span> <span>•</span>
          <span>RETURN POLICY</span> <span>•</span>
          <span>SAVE MONEY</span> <span>•</span>
        </div>
      </div>

      {/* <!-- Leaf Section (After Marquee) --> */}
  <div class="relative w-full h-24">
    <img src="assets/image/img-1-1.webp" alt="Leaf" class="absolute right-0 top-0 h-full object-contain"/>
  </div>
    </>
  );
};

export default Herosection;