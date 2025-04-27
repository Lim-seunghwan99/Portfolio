// src/components/Projects.js (또는 pages/Projects.js 등 위치에 맞게)
import React from 'react';
// import projectsData from '../data/projectsData'; // 데이터 파일 경로에 맞게 수정
// 만약 같은 파일에 있다면 위 import는 필요 없습니다.

// --- projectsData 정의 (만약 별도 파일로 분리하지 않았다면 여기에 위치) ---
import postKoreaImg from "../assets/postkorea.png";
// 다른 이미지 import...

const projectsData = [
  {
    title: "네발자국",
    shortDescription: "개인 맞춤형 산책로 추천 웹 서비스",
    detailedDescription: "사용자 선호도(근처 선호 편의시설, 별점, 거리)와 현재 위치를 기반으로 맞춤 산책로를 추천하고 경로를 안내하는 웹 서비스입니다. 카카오API와 공공데이터를 활용하여 구현했습니다.",
    myRole: "인프라 구축(AWS, Jenkins, Nginx, Docker), 백엔드 API 일부 개발(Spring Boot, FastAPI, Hadoop의 데이터를 사용하는 API), 데이터 파이프라인 구축(Hadoop, Spark) 담당.",
    imageUrl: "https://via.placeholder.com/400x250/cccccc/888888?text=YourFootprints",
    codeUrl: "https://github.com/YourFootprints/YourFootprints",
  },
  {
    title: "POST KOREA",
    shortDescription: "문화재 스탬프 투어 모바일 앱",
    detailedDescription: "GPS 기반으로 사용자 주변의 문화재 정보를 제공하고, 방문 시 스탬프를 발급 및 미니게임 기능을 가진 모바일 앱입니다. 문화재청 API를 활용했으며, 사용자 커뮤니티 기능도 포함되어 있습니다.",
    myRole: "인프라 구축(AWS, Jenkins, Nginx, Docker), 백엔드 API 일부 개발(SpringBoot, 게시판 기능), 데이터베이스 설계(MariaDB/MySQL)",
    imageUrl: postKoreaImg,
    codeUrl: "https://github.com/POSTKOREA/POSTKOREA",
  },
  {
    title: "방송통신위원회 공모전",
    shortDescription: "머신러닝 기반 동영상 분석 및 예측",
    detailedDescription: "제출된 동영상의 카테고리를 자동으로 분류하고, 사용자 데이터를 기반으로 광고 선호도를 예측하는 머신러닝 모델을 개발했습니다. XGBoost 모델을 사용하였고, Streamlit을 이용해 결과를 시각화하는 웹 앱을 구현했습니다.",
    myRole: "데이터 전처리, XGBoost 모델 학습 및 평가, Streamlit 웹 애플리케이션 개발 담당.",
    imageUrl: "https://via.placeholder.com/400x250/cccccc/888888?text=KCC+Project",
    liveUrl: "https://appxgboost-jsuhpixf4fvbxbtbdzcre9.streamlit.app/",
    codeUrl: "https://github.com/Lim-seunghwan99/streamlit_xgboost",
  },
];
// --- projectsData 정의 끝 ---


function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl w-full"> {/* text-center 제거 (내용은 카드별로 정렬) */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up"> {/* 제목만 중앙 정렬 */}
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
              <div className="p-6 flex flex-col flex-grow"> {/* flex-grow가 중요! 내용이 적어도 카드 높이를 채움 */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                {/* 간략 설명 (옵션) */}
                <p className="text-gray-500 text-sm mb-4">{project.shortDescription}</p>

                {/* 상세 설명 */}
                <p className="text-gray-700 text-sm mb-4">{project.detailedDescription}</p>

                {/* 맡은 역할 */}
                <div className="mb-4"> {/* 역할 섹션 감싸기 */}
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">My Role</h4>
                  <p className="text-gray-600 text-sm">{project.myRole}</p>
                </div>

                {/* 링크 - mt-auto를 사용하여 항상 카드 하단에 위치 */}
                <div className="mt-auto pt-4 border-t border-gray-200 flex justify-start space-x-4"> {/* 구분선 추가 및 상단 패딩 */}
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