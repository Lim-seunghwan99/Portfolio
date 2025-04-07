import React from 'react';
import postKoreaImg from "../assets/postkorea.png";

// Example project data - replace with your actual projects
const projectsData = [
  {
    title: "네발자국",
    description: "개인 맞춤형 산책로 추천 팀 프로젝트",
    imageUrl: "https://via.placeholder.com/400x250/cccccc/888888?text=Project+Image", // Replace with actual image URL
    codeUrl: "https://github.com/YourFootprints/YourFootprints", // Replace with source code link
  },
  {
    title: "POST KOREA",
    description: "문화재 스탬프 투어 모바일 팀 프로젝트트",
    imageUrl: postKoreaImg,
    liveUrl: "#",
    codeUrl: "https://github.com/POSTKOREA/POSTKOREA",
  },
  {
    title: "방송통신위원회 공모전",
    description: "머신러닝을 이용한 동영상 카테고리 분류, 광고 선호도 예측",
    imageUrl: "https://via.placeholder.com/400x250/cccccc/888888?text=Project+Image",
    liveUrl: "https://appxgboost-jsuhpixf4fvbxbtbdzcre9.streamlit.app/",
    codeUrl: "https://github.com/Lim-seunghwan99/streamlit_xgboost",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-white"> {/* Alternating background */}
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12" data-aos="fade-up">
          Projects
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3)} // Stagger animation
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex flex-col flex-grow"> {/* flex-grow makes content fill space */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p> {/* flex-grow pushes links down */}
                <div className="mt-auto flex justify-start space-x-4"> {/* Links at the bottom */}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline transition duration-300 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl && project.codeUrl !== "#" && (
                     <a
                       href={project.codeUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-700 hover:text-black hover:underline transition duration-300 text-sm font-medium"
                     >
                       Source Code
                     </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;