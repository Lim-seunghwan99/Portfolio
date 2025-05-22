// src/components/Projects.js (또는 pages/Projects.js 등 위치에 맞게)
import React from 'react';
import postKoreaImg from "../assets/postkorea.png";
import yourFootImg from "../assets/ComfyUI_00035_.png";
import BroadCastImg from "../assets/ComfyUI_00036_.png";
import fallDetectionImg from "../assets/ComfyUI_00038_.png";
import ProjectDescription from "./ProjectDescription";


const projectsData = [
  {
    title: "네발자국",
    shortDescription: "사용자 위치와 선호 정보를 기반으로 맞춤형 산책로를 추천하는 웹 서비스",
    detailedDescription: "사용자의 현재 위치와 선호도(편의시설, 별점, 거리 등)를 분석하여 개인화된 산책로를 추천하고 경로를 안내하는 웹 서비스입니다. 카카오 지도 API와 공공데이터(Open API)를 활용해 실시간 위치 기반 정보 제공이 가능하도록 했으며, Hadoop과 Spark 기반의 데이터 파이프라인을 구축해 산책로 데이터를 정제·가공하여 추천 알고리즘에 반영했습니다. 백엔드는 Spring Boot와 FastAPI를 병행해 마이크로서비스 구조 일부를 구현했으며, Jenkins, Docker, Nginx, AWS를 활용해 CI/CD 및 배포 환경을 구성했습니다.",
    myRole: "AWS 기반 인프라 구축 및 Jenkins, Docker, Nginx를 통한 CI/CD 파이프라인 구성, Hadoop·Spark 기반 데이터 파이프라인 설계 및 구축, Spring Boot와 FastAPI를 활용한 백엔드 API 개발",
    imageUrl: yourFootImg,
    codeUrl: "https://github.com/YourFootprints/YourFootprints",
  },
  {
    title: "실시간 낙상 인식 시스템",
    shortDescription: "실시간 관절 추적 및 시계열 분석을 통해 낙상 상황을 분류하고, 즉각적인 알림 전송으로 응급 대응을 지원하는 AI 기반 안전 감지 시스템입니다.",
    detailedDescription: "MediaPipe와 OpenCV를 활용해 관절 좌표를 실시간 추출하고, PyTorch 기반의 LSTM 모델에 시계열 형태로 입력하여 낙상 여부를 분류하는 AI 시스템입니다. 3차 스플라인 보간법을 이용해 관절 좌표의 연속성을 확보했으며, 모델은 사전 학습된 LSTM을 전이 학습 방식으로 최적화했습니다. 추론 결과는 FastAPI를 통해 API로 제공되며, React + WebSocket을 통해 프론트엔드에서 실시간 시각화됩니다. 낙상 인식 시 즉시 SMS를 전송하여 신속한 응급 대응을 가능하게 했습니다.",
    myRole: "LSTM 모델 전이 학습 및 데이터 전처리(3차 스플라인 적용) 파이프라인 구축, FastAPI 기반 추론 서버 및 React + WebSocket을 활용한 실시간 시각화 대시보드 등 전 개발 과정",
    imageUrl: fallDetectionImg,
    codeUrl: "https://github.com/Lim-seunghwan99/mtvs-project3_fall_detection",
  },
  {
    title: "방송통신위원회 공모전",
    shortDescription: "머신러닝 기반 동영상 분류 및 사용자 선호 광고 예측 시스템 개발",
    detailedDescription: "사용자가 제출한 동영상 콘텐츠를 자동으로 분류하고, 사용자 행동 데이터를 기반으로 광고 선호도를 예측하는 머신러닝 기반 분석 시스템을 개발했습니다. 모델은 XGBoost를 활용하여 카테고리 분류 및 예측 정확도를 최적화했으며, 결과는 Streamlit을 이용한 웹 대시보드 형태로 시각화해 사용자 편의성을 높였습니다. 데이터 전처리부터 모델 학습, 평가, 웹 앱 구현까지 전 과정을 주도적으로 수행했습니다.",
    myRole: "데이터 전처리, XGBoost 기반 분류 및 예측 모델 개발, Streamlit 웹 구현까지 전 개발 과정",
    imageUrl: BroadCastImg,
    codeUrl: "https://github.com/Lim-seunghwan99/streamlit_xgboost",
  },
  {
    title: "POST KOREA",
    shortDescription: "GPS 기반 문화재 스탬프 투어 및 커뮤니티 기능을 제공하는 모바일 앱",
    detailedDescription: "사용자의 현재 위치를 기반으로 주변의 문화재 정보를 제공하고, 방문 시 스탬프를 발급해주는 위치 기반 모바일 투어 앱입니다. 문화재청 오픈 API를 통해 문화재 데이터를 실시간으로 연동하였으며, 미니게임 요소와 사용자 커뮤니티(게시판) 기능을 함께 제공하여 문화유산에 대한 흥미와 참여를 높였습니다. AWS 기반 인프라 환경에 Jenkins, Nginx, Docker를 활용한 CI/CD 및 배포 자동화 구조를 구성했으며, Spring Boot 기반 REST API와 MariaDB를 활용한 데이터베이스 설계를 맡아 서비스의 핵심 기능 개발에 기여했습니다.",
    myRole: "AWS, Jenkins, Nginx, Docker를 활용한 인프라 및 배포 자동화 구축, Spring Boot 기반 게시판 API 개발, MariaDB 설계를 포함한 백엔드 전반 참여",
    imageUrl: postKoreaImg,
    codeUrl: "https://github.com/POSTKOREA/POSTKOREA",
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
                {/* <p className="text-gray-700 text-sm mb-4">{project.detailedDescription}</p> */}
                <ProjectDescription text={project.detailedDescription} />

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