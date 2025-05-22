import React, { useState } from "react";

function ProjectDescription({ text }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <p
        className={`text-gray-700 text-sm mb-2 whitespace-pre-line ${
          !expanded ? "line-clamp-3" : ""
        }`}
        style={{ wordBreak: "break-word" }}
      >
        {text}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-600 hover:underline text-sm font-medium"
        aria-label={expanded ? "간략히 보기" : "자세히 보기"}
      >
        {expanded ? "간략히 보기 ▲" : "자세히 보기 ▼"}
      </button>
    </>
  );
}

export default ProjectDescription;
