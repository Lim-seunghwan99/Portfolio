// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white shadow-lg overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12" // Large, bold text, margin bottom
          data-aos="fade-right" // Animation: fade in from the right
        >
          About<span className="text-blue-600">_</span> {/* Optional: Color the underscore */}
        </h2>

        {/* Content Area */}
        <div
          className="text-base md:text-lg text-gray-700 leading-relaxed space-y-6" // Spacing between direct children (paragraphs, heading, project divs)
          data-aos="fade-up"    // Animation: fade in upwards
          data-aos-delay="200"  // Optional: slight delay after title animation
        >
          {/* --- Introductory Paragraphs --- */}
          <p>
            저는 대학 시절 통계학을 전공했으며, 데이터 분석을 위해 프로그래밍을 시작했습니다.
            Python, Java, R, C++, SQL 등 다양한 언어를 기반으로 한 강의를 수강했으며,
            그 중 특히 인상 깊었던 강의는 <span className="font-semibold">빅데이터 분석 강의</span>였습니다.
            이 강의에서는 Python을 활용해 데이터 크롤링, 분석, 시각화를 진행했습니다.
          </p>
          <p>
          대학 졸업 후에는 <span className="font-semibold">삼성청년소프트웨어아카데미(SSAFY)</span>에 입과해 1년간
          Computer Science, Django, Vue.js, Spring Boot 등 다양한 기술을 체계적으로 학습했습니다.
          특히 1학기에는 반 내 <span className="font-semibold">성적 우수상(3위)</span>을 수상하며 학습 역량을 인정받았습니다.
          </p>
          <p>
          아카데미 수료 후에는 <span className="font-semibold">글루코메트릭스</span>에서 3개월간 소프트웨어 엔지니어로 근무하며,  
          의료 데이터를 기반으로 알고리즘을 개발하고, <span className="font-semibold">Docker와 Linux 환경</span>에서 테스트 자동화 시스템을 구축했습니다.  
          또한 <span className="font-semibold">React</span>를 활용해 의료 데이터 검증을 위한 웹 기반 GUI를 직접 설계·구현했습니다.
          </p>
          <p>
          현재는 <span className="font-semibold">메타버스 AI 융합 과정</span>에 참여하여  
          머신러닝과 딥러닝을 비롯해 자연어 처리(NLP), 컴퓨터 비전(OpenCV, MediaPipe),  
          대규모 언어 모델(LLM), RAG(Retrieval-Augmented Generation), AI Agent 등  
          다양한 최신 AI 기술을 폭넓게 학습하고 있습니다.
          </p>

          {/* --- Projects Sub-heading --- */}
          <h3 // Changed to h3 for better semantic hierarchy under the main h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 pt-8 pb-4" // Styled like a sub-heading, added padding top/bottom
          >
            주요 프로젝트
          </h3>

          {/* --- Project 1: YouFoot --- */}
          {/* Removed mt-10 here, spacing is handled by h3's padding-bottom and the parent div's space-y */}
          <div>
            <p className="font-bold text-lg mb-2"> {/* Slightly larger bold title, margin-bottom */}
              [YouFoot - 개인 맞춤형 산책로 추천 서비스]
            </p>
            <p>
              사용자의 위치와 선호도를 기반으로 맞춤 산책 경로를 추천하는 웹 서비스입니다.
              <span className="font-semibold"> AWS EC2, RDS, Nginx, Docker, Jenkins</span>를 활용해 인프라를 구축하고,  
              <span className="font-semibold">Spring Boot, FastAPI</span>로 백엔드 API를 개발했으며,  
              <span className="font-semibold">Hadoop과 Spark</span>를 이용해 추천 모델용 데이터 파이프라인을 구현했습니다.
            </p>
          </div>

          {/* --- Project 2: Fall Detection System --- */}
          <div className="mt-6"> {/* Keep margin-top for separation between projects */}
            <p className="font-bold text-lg mb-2"> {/* Slightly larger bold title, margin-bottom */}
              [실시간 낙상 인식 시스템]
            </p>
            <p>
              <span className="font-semibold">MediaPipe</span>와 <span className="font-semibold">OpenCV</span>로 관절 좌표를 추출하고,  
              <span className="font-semibold">PyTorch 기반 LSTM 모델</span>을 통해 시계열 데이터를 분석해 낙상을 분류했습니다.  
              실시간 추론을 위해 <span className="font-semibold">WebSocket 기반 시각화 시스템</span>과  
              <span className="font-semibold">전처리 자동화(스플라인 보간 등)</span>도 직접 구현했습니다.
            </p>
          </div>

          {/* --- Project 3: Dacon Rock Classification --- */}
          <div className="mt-6"> {/* Keep margin-top for separation between projects */}
            <p className="font-bold text-lg mb-2"> {/* Slightly larger bold title, margin-bottom */}
              [데이콘 암석 분류 대회]
            </p>
            <p>
              <span className="font-semibold">CNN 기반 모델링, 데이터 증강, 하이퍼파라미터 튜닝</span>을 통해  
              초기 정확도 0.5614에서 0.8592까지 성능을 향상시켰습니다.  
              학습 데이터 분포 분석과 앙상블 기법을 활용해 모델의 일반화 성능을 높였습니다.
            </p>
          </div>

        </div> {/* End Content Area */}
      </div> {/* End Container */}
    </section>
  );
}

export default About;