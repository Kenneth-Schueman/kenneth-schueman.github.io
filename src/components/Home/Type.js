import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Open Source Contributor",
          "Web Developer",
          "Vidogame Developer",
          "Mobile App Developer",
          "AI/ML-Enthusiast",
          "C2PA Expert",
          "Tinkerer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
