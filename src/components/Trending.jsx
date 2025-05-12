import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TrendingNow = () => {
  const sliderImages = [
    './assets/image/slider-1.webp',
    './assets/image/slider-2.webp',
    './assets/image/slider-3.webp',
  ];

  const [current, setCurrent] = useState(0);
  const [sliderSrc, setSliderSrc] = useState(sliderImages[0]);

  const showSlide = (index) => {
    setCurrent(index);
    setSliderSrc(sliderImages[index]);
  };

  const nextSlide = () => {
    const next = (current + 1) % sliderImages.length;
    showSlide(next);
  };

  const prevSlide = () => {
    const prev = (current - 1 + sliderImages.length) % sliderImages.length;
    showSlide(prev);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [current]);

  // ✅ Add these missing functions
  const hoverImage = (e) => {
    const img = e.currentTarget.querySelector('img');
    if (img && img.getAttribute('data-hover')) {
      img.dataset.src = img.src;
      img.src = img.getAttribute('data-hover');
    }
  };

  const resetImage = (e) => {
    const img = e.currentTarget.querySelector('img');
    if (img && img.dataset.src) {
      img.src = img.dataset.src;
    }
  };

  return (
    <section className="py-5 bg-white">
      <div className="text-center mb-[60px]">
        <p className="uppercase text-[#1c1c1c] mb-4 font-[400] text-[16px]">Your Amazing Beauty</p>
        <h2 className="font-[600] text-[40px]">Trending Now</h2>
      </div>

      <div className="bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative group">
          <div className="relative overflow-hidden rounded-xl">
            <img
              id="sliderImage"
              src={sliderSrc}
              alt="Slider"
              className="w-full h-[600px] object-cover rounded-xl transition-all duration-700"
            />
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow-md group-hover:scale-90 transition-transform duration-300 z-10"
            >
             <IoIosArrowBack />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow-md group-hover:scale-90 transition-transform duration-300 z-10"
            >
             <IoIosArrowForward />
            </button>
          </div>

          {/* Regular product grid (desktop and tablets) */}
          <div className="hidden md:grid col-span-2 grid-cols-2 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <div
                key={i}
                className="product relative bg-white shadow-md p-4 rounded-lg flex items-center gap-4"
                onMouseOver={hoverImage}
                onMouseOut={resetImage}
              >
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
                  -10%
                </div>
                <div className="w-24 h-24 overflow-hidden rounded-md">
                  <img
                    src="./assets/image/product(1).webp"
                    data-hover="./assets/image/product(1.1).webp"
                    alt="Product"
                    className="w-full h-full object-cover transition duration-700 ease-in-out"
                  />
                </div>
                <div>
                  <div className="flex space-x-1 mb-1 text-sm">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <h3 className="font-semibold text-gray-700 text-sm">
                    Radiant Silk Cleanser
                  </h3>
                  <p className="text-sm text-gray-600">
                    $68.00 <span className="line-through text-gray-400 text-xs ml-2">$70.00</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive slider for mobile (766px to 479px) */}
          <div className="md:hidden flex overflow-x-auto scroll-smooth gap-4 snap-x snap-mandatory px-2 pb-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="min-w-[85vw] flex flex-col gap-4 snap-center">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div
                    key={j}
                    className="product relative bg-white shadow-md p-4 rounded-lg flex items-center gap-4"
                    onMouseOver={hoverImage}
                    onMouseOut={resetImage}
                  >
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
                      -10%
                    </div>
                    <div className="w-24 h-24 overflow-hidden rounded-md">
                      <img
                        src="./assets/image/product(1).webp"
                        data-hover="./assets/image/product(1.1).webp"
                        alt="Product"
                        className="w-full h-full object-cover transition duration-700 ease-in-out"
                      />
                    </div>
                    <div>
                      <div className="flex space-x-1 mb-1 text-sm">
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-300">★</span>
                        <span className="text-gray-300">★</span>
                      </div>
                      <h3 className="font-semibold text-gray-700 text-sm">
                        Radiant Silk Cleanser
                      </h3>
                      <p className="text-sm text-gray-600">
                        $68.00 <span className="line-through text-gray-400 text-xs ml-2">$70.00</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
