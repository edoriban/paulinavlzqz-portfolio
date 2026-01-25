import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initAnimations() {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  
  if (prefersReducedMotion) return;

  const cards = document.querySelectorAll(".bento-card");
  if (cards.length > 0) {
    gsap.from(cards, {
      scrollTrigger: {
        trigger: cards[0].closest(".grid") || cards[0],
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out",
    });
  }

  // Hero text animation
  const heroTitle = document.querySelector("h1");
  if (heroTitle) {
    gsap.from(heroTitle, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }
}
