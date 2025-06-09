// src/pages/Home.js
import React from "react";

function Home() {
  return (
    // pt-16 클래스 추가 (네비게이션 바 높이만큼)
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 relative"
    >
      {" "}
      {/* relative 추가 for absolute positioning of arrow */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 relative"
      >
        <div data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            안녕하세요, 저는 <span className="text-blue-600">임승환</span>
            입니다.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            "풀스택 개발자로서 Python, Java, JavaScript를 모두 다룰 수 있으며,
            <br />
            특히 Python과 데이터 분야에 강점을 가지고 있습니다."
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto mt-4">
            AI에 관심이 있어 LangChain 기반의 AI 에이전트 및 RAG 구축 경험이
            있으며, 백준 골드1 단계 314문제(주로 Python), SWEA 259문제(Python),
            프로그래머스 344문제(Java)를 풀며 프로그래밍 언어를 학습했습니다.
          </p>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>
      {/* Scroll down hint */}
      <div className="absolute bottom-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

export default Home;
