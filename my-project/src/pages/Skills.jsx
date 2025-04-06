// import React from 'react';

// function Skills() {
//   return (
//     <section id="skills" className="h-screen flex items-center justify-center bg-gray-200">
//       <div className="text-center">
//         <h2 className="text-4xl font-bold mb-4">Skills</h2>
//         <p>Here are some of the technologies I work with:</p>
//         <ul className="mt-4 flex space-x-6 justify-center">
//           <li className="text-xl">React</li>
//           <li className="text-xl">Node.js</li>
//           <li className="text-xl">Tailwind CSS</li>
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Skills;

// src/pages/Skills.js
import React from 'react';

// Example skills data - replace with your actual skills
const skillsList = [
  'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS',
  'Node.js', 'Express', 'MongoDB', 'Git', 'Docker', 'TypeScript', 'Next.js'
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12" data-aos="fade-up">
          My Skills
        </h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="200" // Slight delay for the grid
        >
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up" // Individual item animation
              data-aos-delay={100 * (index % 4)} // Stagger animation slightly
            >
              <p className="text-md font-medium text-gray-700">{skill}</p>
              {/* Optional: Add icons here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;