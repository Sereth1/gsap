import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial';
import React, { useRef } from 'react';

export default function Letters() {
  const nik = useRef([]);
  const letters = ['f', 'u', 'c', 'k'];

  useGSAP(() => {
    nik.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { x: 1000, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            delay: i * 0.5,
            duration: 1,
            ease: 'sine',
            stagger: 1,
          }
        );
      }
    });
  }, []);

  return (
    <div>
      {letters.map((letter, i) => (
        <div
          key={i}
          ref={(el) => {
            nik.current[i] = el;
          }}
          className="inline-block opacity-0"
          style={{ fontSize: '24px', margin: '10px' }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
