import { useState, useEffect } from 'react';
import './hero-text.css';

export const HeroText = () => {
  const fullText = 'Where Your Web Ideas Come Alive.';
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 200; // 0.4 secunde

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }
  }, [displayedText, fullText]);

  return (
    <div className='typewriter'>
      <p>{displayedText}</p>
    </div>
  );
};
