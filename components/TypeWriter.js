"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter({words, typeSpeed, deleteSpeed, cursorStyle}) {
  return (
    <Typewriter
      cursor
      style 
      words={words || ['']}
      loop={true}
      cursorStyle={cursorStyle || '|'}
      typeSpeed={typeSpeed || 100}
      deleteSpeed={deleteSpeed || 50}
    ></Typewriter>
  );
}
