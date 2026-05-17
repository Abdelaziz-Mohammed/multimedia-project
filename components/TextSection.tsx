"use client";

import { useEffect, useRef, useState } from "react";

export default function TextSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="text" ref={sectionRef} className="px-4 py-20 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/7 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.32)] backdrop-blur-2xl sm:p-10 ${
          isVisible ? "animate-reveal-up" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
            Text Element
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-calistoga)] text-3xl text-white sm:text-4xl">
              Text Element
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              This multimedia project demonstrates how{" "}
              <strong>text formatting</strong>, images,
              <em className="italic text-cyan-200"> animations</em>, and videos
              work together in modern web design.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              You can use{" "}
              <strong className="font-semibold text-white">bold text</strong> to
              highlight key ideas,{" "}
              <em className="italic text-sky-200">italic text</em> for emphasis,
              and a{" "}
              <span className="rounded-lg bg-amber-300/20 px-2 py-1 font-medium text-amber-100">
                highlighted text
              </span>{" "}
              treatment to guide the reader&apos;s attention.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Use clean spacing, readable hierarchy, and subtle color accents to
              make written content feel polished and intentional.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Bold", value: "Strong hierarchy" },
              { label: "Italic", value: "Soft emphasis" },
              { label: "Highlighted", value: "Focused detail" },
              { label: "Colored", value: "Visual contrast" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5 shadow-lg shadow-slate-950/20 transition-transform duration-300 hover:-translate-y-1 hover:bg-slate-900/70"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/75">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
