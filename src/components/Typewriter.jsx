import React, { useState, useEffect } from 'react';

function Typewriter({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, displayText, text, speed]);

  return <span>{displayText}</span>;
}

export default Typewriter;
