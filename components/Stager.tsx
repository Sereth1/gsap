import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial';
import React, { useRef } from 'react';

export default function EnhancedStager() {
  const boxRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      boxRefs.current,
      { y: -20, scale: 1 },
      {
        repeat: -1,
        duration: 1,
        scale: 0.1,
        y: 40,
        ease: 'power1.inOut',
        stagger: {
          from: 'end',
          amount: 4,
        },
      }
    );
  }, []);

  return (
    <div className="grid grid-cols-12 gap-1 w-full">
      {' '}
      {/* Adjusted grid to 10 columns with gap */}
      {Array.from({ length: 48 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            boxRefs.current[i] = el;
          }}
          className="bg-green-500 rounded-lg h-32 w-32"
        >
          yo
        </div>
      ))}
    </div>
  );
}
