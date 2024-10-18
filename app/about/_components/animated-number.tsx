"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface NumberProps {
  value: number;
}
const AnimatedNumbers: React.FC<NumberProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && parseFloat(latest.toFixed(0)) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} className="text-dark dark:text-light"></span>;
};

export default AnimatedNumbers;
