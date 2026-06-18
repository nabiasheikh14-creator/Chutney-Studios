"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type HomePageAnimationsProps = {
  children: ReactNode;
};

export function HomePageAnimations({ children }: HomePageAnimationsProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.documentElement.classList.add("motion-ready");

    if (prefersReducedMotion) {
      document.documentElement.classList.add("reduced-motion");

      return () => {
        document.documentElement.classList.remove("motion-ready", "reduced-motion");
      };
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { y: 72, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.2,
        },
      );

      gsap.fromTo(
        ".hero__mark",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 0.16, duration: 1.4, ease: "power2.out", delay: 0.4 },
      );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
            },
          },
        );
      });

      gsap.fromTo(
        ".intro__watermark",
        { scale: 0.85 },
        {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".intro",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            delay: index * 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".wipe-copy").forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".rule-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 84%",
            },
          },
        );
      });

      gsap.fromTo(
        ".proof-card",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".proof__grid",
            start: "top 82%",
          },
        },
      );
    }, root);

    return () => {
      context.revert();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
