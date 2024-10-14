'use client';
import Animated from '@/components/Animated';
import Control from '@/components/Control';
import MoreScrollTrigger from '@/components/MoreScrollTrigger';
import Proggress from '@/components/Proggress';
import ScrollTriggerComponent from '@/components/ScrollTrigger';
import EnhancedStager from '@/components/Stager';
import Tweet from '@/components/Tweet';
import { useState } from 'react';

export default function page() {
  const fuck = useState();
  return (
    <div>
      <Animated />
      <EnhancedStager />
      <Control />
      <ScrollTriggerComponent />

      <MoreScrollTrigger />
      <Tweet />
      <Proggress />
    </div>
  );
}
