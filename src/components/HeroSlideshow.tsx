"use client";
import { useEffect, useState } from "react";

export function HeroSlideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);
  if (images.length === 0) return null;
  return (
    <div className="hero-slideshow" aria-hidden="true">
      {images.map((src, i) => (
        <img key={src} src={src} alt="" style={{ opacity: i === index ? 1 : 0 }} />
      ))}
      <div className="hero-slideshow-overlay" />
    </div>
  );
}
