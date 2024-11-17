import React, { useState, useEffect } from 'react';

function ScrollingText() {
  const [text, setText] = useState('Initial Text');
  const textArray = ['Text 1', 'Text 2', 'Text 3'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const textIndex = Math.floor(scrollY / 100);
      setText(textArray[textIndex % textArray.length]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [textArray]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default ScrollingText;