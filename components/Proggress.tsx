import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Progress() {
  const box = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: box.current,
      start: 'top center',
      end: '+=500',
      onUpdate: (self) => {
        console.log('Progress:', self.progress); // Log progress

        gsap.to(box.current, {
          y: self.progress * 500,
          ease: 'none',
        });

        // Check the progress
        if (self.progress >= 0.08) {
          console.log('Progress is over 50%'); // Log when over 50%
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <div
        ref={box}
        className="container h-20 w-20 border bg-slate-400"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Progress
      </div>
    </div>
  );
}
