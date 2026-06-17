'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [isPointer, setIsPointer] = useState(false);
  const [mounted, setMounted] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 220, restDelta: 0.1 });
  const springY = useSpring(y, { damping: 28, stiffness: 220, restDelta: 0.1 });

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(hover: none)').matches) return;
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setIsPointer(!!el?.closest('a, button, [role="button"], [data-cursor-pointer]'));
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`cursor-follower${isPointer ? ' cursor-follower--pointer' : ''}`}
      style={{ x: springX, y: springY, position: 'fixed', zIndex: 199, pointerEvents: 'none' }}
    />
  );
}
