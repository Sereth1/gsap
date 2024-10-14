import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Animated() {
  const elementsRef = useRef([]);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useGSAP(() => {
    elementsRef.current.forEach((element, index) => {
      gsap.fromTo(
        element,
        { x: '-200%', y: 0, opacity: 0 },
        {
          duration: 1,
          x: `${Math.random() * 120}vh`,
          y: `${Math.random() * 100}vh`,
          opacity: 1,
          rotation: 360,
          delay: index * 0.1,
          backgroundColor: `${getRandomColor()}`,

          ease: 'power1',
        }
      );
    });
  });

  return (
    <div className="relative w-full h-screen bg-transparent">
      {Array.from({ length: 1000 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          className="absolute w-fit border opacity-0"
        >
          Animated {index + 1}
        </div>
      ))}
    </div>
  );
}
