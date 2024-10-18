"use client";
import { motion, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const FramerImage = motion(Image);
interface MovingImageProps {
  title: string;
  img: StaticImageData;
  link: string;
}
const MovingImage: React.FC<MovingImageProps> = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  function handMouse(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(e.pageX);
      y.set(-10);
    }
  }

  function handMouseLeave() {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handMouse}
      onMouseLeave={handMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
      />
    </Link>
  );
};

export default MovingImage;
