// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center bg-blue-900 text-white w-full max-w-4xl h-full p-6 rounded-lg shadow-xl">
//       <h1 className="text-4xl font-bold mb-4 text-center">Cloud & Infrastructure Specialist</h1>
//       <p className="text-xl text-center text-gray-300 mb-6">Designing and implementing cloud solutions for scalable infrastructure.</p>
//       <div className="flex justify-center gap-6">
//         <a href="#projects" className="text-lg font-semibold text-cyan-400 hover:underline">See My Work</a>
//         <a href="#skills" className="text-lg font-semibold text-cyan-400 hover:underline">Cloud Expertise</a>
//       </div>
//     </div>
//   );
// }
import React from 'react';

function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-blue-500 text-white">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">Showcasing My Skills and Projects</p>
    </section>
  );
}

export default Home;

