import React, { useState, useEffect } from 'react';
import {ROLES} from "../constants/index.js"

function TimerText() {
  const [text, setText] = useState('Initial Text');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ROLES.length);   

    }, 2000); 

    return () => clearInterval(intervalId);
  }, [ROLES]);

  useEffect(() => {
    setText(ROLES[currentIndex]);
  }, [currentIndex, ROLES]);

  return (
    <div>
      <h1>{'{'}{text}{'}'}</h1>
    </div>
  );
}

export default TimerText;