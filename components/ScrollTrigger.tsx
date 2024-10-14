import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerComponent() {
  const endAnimation = useRef(null);
  const firstCube = useRef(null);
  const secondCube = useRef(null);

  useGSAP(() => {
    const firstCubePosition = firstCube.current.getBoundingClientRect();
    const secondCubePosition = secondCube.current.getBoundingClientRect();
    const distance = secondCubePosition.left - firstCubePosition.left;

    console.log(firstCube.current);

    console.log('Distance:', distance);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstCube.current,
        start: 'top center',
        endTrigger: endAnimation.current,
        scrub: true,
        markers: true,
      },
    });

    tl.addLabel('start')
      .fromTo(firstCube.current, { x: 0 }, { x: distance, rotate: 360 })
      .addLabel('secondAnimation')
      .addLabel('end');
  }, []);

  return (
    <div>
      <div className="flex justify-between w-full px-24">
        <div ref={firstCube} className="bg-red-500 w-32 h-32 relative">
          First Cube
        </div>
        <div ref={secondCube} className="bg-blue-500 w-32 h-32 relative">
          Second Cube
        </div>
      </div>
      <div style={{ height: '100vh' }}>Scroll down to see the animation.</div>
      <div className="border p-4">manes</div>
      <div className="border p-4">manes</div>
      <div ref={endAnimation} className="border p-4">
        stop
      </div>
      <div className="border p-4">manes</div>
      <div className="border p-4">manes</div>
      <div className="border p-4">manes</div>
      <div className="border p-4">manes</div>
    </div>
  );
}
