"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/assets/img-1.jpg",
  "/assets/img-2.jpg",
  "/assets/img-3.jpg",
  "/assets/img-4.jpg",
  "/assets/img-5.jpg",
];

export default function ImagesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  useEffect(() => {
    if (isHovered) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((value) => value + 1);
    }, 3500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex !== images.length) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsTransitionEnabled(false);
      setCurrentIndex(0);
      window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    }, 700);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  return (
    <section id="images" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/75 backdrop-blur-xl">
              Image Slider
            </span>
            <h2 className="mt-4 font-(family-name:--font-calistoga) text-3xl text-white sm:text-4xl">
              Image Slider
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Auto-playing, infinitely looping, and paused on hover for a smooth
            media showcase.
          </p>
        </div>

        <div
          className="group rounded-4xl border border-white/10 bg-white/7 p-3 shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-[1.75rem]">
            <div
              className={`flex ${isTransitionEnabled ? "transition-transform duration-700 ease-out" : "transition-none"}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={() => {
                if (currentIndex === images.length) {
                  setIsTransitionEnabled(false);
                  setCurrentIndex(0);
                  window.requestAnimationFrame(() => {
                    setIsTransitionEnabled(true);
                  });
                }
              }}
            >
              {[...images, images[0]].map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative h-60 w-full shrink-0 sm:h-90 lg:h-120"
                >
                  <Image
                    src={image}
                    alt={`Multimedia project slide ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 px-2 pb-1">
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex % images.length === index
                      ? "w-8 bg-cyan-300"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {isHovered ? "Paused on hover" : "Autoplay enabled"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
