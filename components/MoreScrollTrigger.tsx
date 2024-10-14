'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MoreScrollTrigger() {
  const starting = useRef(null);
  const firstBox = useRef(null);
  const secBox = useRef(null);
  const thirdBox = useRef(null);
  const fourthBox = useRef(null);

  useEffect(() => {
    let fistBoxPos = firstBox.current.getBoundingClientRect();

    console.log(firstBox);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: starting.current,
        pin: false,
        end: '+=500',
      },
    });

    tl.addLabel('start')
      .fromTo(
        firstBox.current,
        { y: 0 },
        { rotation: 360, y: 200, delay: 1, direction: 100 }
      )
      .fromTo(secBox.current, { y: 0, rotation: 50 }, { y: 300, rotation: 50 })
      .fromTo(
        thirdBox.current,
        { y: 0, rotation: 50 },
        { y: 300, rotation: 50 }
      );

    tl.addLabel('start')
      .fromTo(
        firstBox.current,
        { y: 0 },
        { rotation: 600, y: 800, delay: 2, direction: 100 }
      )
      .fromTo(fourthBox.current, { y: 0 }, { rotation: 600, y: 800 });
  }, []);

  return (
    <div ref={starting} className="flex">
      <div ref={firstBox} className="border bg-red-200 w-[500px] h-[500px]">
        red
      </div>
      <div ref={secBox} className="border bg-green-200 w-20 h-20">
        gr
      </div>
      <div ref={thirdBox} className="border bg-purple-200 w-20 h-20">
        pr
      </div>{' '}
      <div ref={thirdBox} className="border bg-yellow-200 w-20 h-20">
        pr
      </div>
      <div className="h-[800px]"></div>
    </div>
  );
}
