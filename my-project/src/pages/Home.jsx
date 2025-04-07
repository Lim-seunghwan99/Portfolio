// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    // pt-16 클래스 추가 (네비게이션 바 높이만큼)
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 relative"> {/* relative 추가 for absolute positioning of arrow */}
      <div data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Hello, I'm Lim Seung Hwan
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          I'm a FullStack Developer passionate about creating interactive and user-friendly web experiences.
        </p>
      </div>
      {/* Scroll down hint */}
       <div className="absolute bottom-10 animate-bounce">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
         </svg>
       </div>
    </section>
  );
}

export default Home;