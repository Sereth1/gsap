import gsap from 'gsap-trial/all';
import React, { useRef, useEffect } from 'react';

export default function Control() {
  const animation = useRef(null);
  const tween = useRef(null);
  useEffect(() => {
    tween.current = gsap.to(animation.current, {
      duration: 10,
      x: 2000,
      paused: true,
    });
  }, []);

  return (
    <div>
      <div ref={animation} className="border bg-red-50 w-10 h-12">
        aaa
      </div>
      <button onClick={() => tween.current.resume()}>Resume</button>
      <button onClick={() => tween.current.restart()}>restart</button>{' '}
    </div>
  );
}
