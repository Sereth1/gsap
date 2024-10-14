import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial/all';
import React, { useRef } from 'react';

export default function Timeline() {
  const green = useRef(null);
  const blue = useRef(null);
  const red = useRef(null);

  useGSAP(() => {
    tl.to(green.current, { x: 600, duration: 0.5, ease: 'expo' }, 1);
    tl.to(blue.current, { x: 600, duration: 0.5 }, '<');
    tl.to(red.current, { x: 600, duration: 0.5 }, '+=');
  });

  let tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    smoothChildTiming: true,
  });
  return (
    <div>
      <div className="bg-green-600 border w-12 h-12" ref={green}></div>
      <div className="bg-blue-600 border w-12 h-12" ref={blue}></div>
      <div className="bg-red-600 border w-12 h-12" ref={red}></div>
    </div>
  );
}
