'use client';
import React, { useCallback, useEffect, useState } from 'react';

const Banner = React.memo(() => {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [displayedText3, setDisplayedText3] = useState('');
  const [displayedText4, setDisplayedText4] = useState('');

  const phrases = [['후회없는', '귀가를 위해', 'OBJ', 'ect.']];

  const typePhrase = useCallback(async () => {
    for (const [phrase1, phrase2, phrase3, phrase4] of phrases) {
      for (const char1 of phrase1) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setDisplayedText1((prevText) => prevText + char1);
      }
      setDisplayedText1((prevText) => prevText + '');

      for (const char2 of phrase2) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setDisplayedText2((prevText) => prevText + char2);
      }
      setDisplayedText2((prevText) => prevText + '');

      for (const char3 of phrase3) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setDisplayedText3((prevText) => prevText + char3);
      }
      setDisplayedText3((prevText) => prevText + '');

      await new Promise((resolve) => setTimeout(resolve, 100));

      setDisplayedText4((prevText) => prevText + phrase4);
    }
  }, []);

  useEffect(() => {
    typePhrase();
  }, [typePhrase]);

  return (
    <div className="relative">
      <img
        src="/img/hero.jpg"
        alt="background image"
        loading="lazy"
        className="block w-full md:h-[80vh]"
      />
      <div className="hidden mob:block absolute top-[80px] left-[30px] lg:left-[80px]">
        <h1 className="font-gothic text-[32px] sm:text-[56px] md:text-[80px] text-[#57534e]/[0.9]">
          {displayedText1}
          <br />
          {displayedText2}
          <br />
          <span className="text-[#1c1917]">{displayedText3}</span>
          {displayedText4}
        </h1>
      </div>
    </div>
  );
});

export default Banner;
