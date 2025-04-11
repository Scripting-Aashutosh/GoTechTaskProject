import React, { useEffect, useRef, useState } from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center  transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Heading */}
      <h1 className='mt-6 lg:mt-20 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        Sharp the Future
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          {" "}
          with VR Technology
        </span>
      </h1>

      {/* Description */}
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl px-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod cumque quos, laudantium molestias consequatur minima quia quo voluptatem quas enim repudiandae corporis, in omnis nam beatae eaque dolorem. Eligendi.
      </p>

      {/* Buttons */}
      <div className='flex justify-center my-10 flex-wrap gap-4'>
        <button className='border bg-blue-600 text-white py-3 px-6 rounded-md'>
          Start for free
        </button>
        <button className='py-3 px-6 rounded-md border'>
          Documentation
        </button>
      </div>

      {/* Videos */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-6 w-full px-4 mt-10'>
        <video
          autoPlay
          loop
          muted
          className='w-full md:w-1/2 rounded-lg border border-orange-700 shadow-orange-400 shadow-sm'
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className='w-full md:w-1/2 rounded-lg border border-orange-700 shadow-orange-400 shadow-sm'
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Header;
