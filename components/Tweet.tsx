import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Tweet() {
  const start = useRef(null);

  useGSAP(() => {
    const tween = gsap.to(start.current, {
      x: 600,
      duration: 5,
      ease: 'back.in',
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
        markers: true,
      },
    });

    console.log('fuck', tween); // tween
  }, []);

  return (
    <div id="example" ref={start} className="flex pt-[500px] pb-[800px]">
      <div className="w-10 h-10 bg-cyan-300">hi</div>
      <div className="w-10 h-10 bg-blue-300">bye</div>
    </div>
  );
}
