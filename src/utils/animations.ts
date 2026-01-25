import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initAnimations() {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);
  
  // Refresh ScrollTrigger on each initialization
  ScrollTrigger.refresh();

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

  // Quote card animation
  const quoteCard = document.querySelector(".quote-card");
  if (quoteCard) {
    const quoteText = quoteCard.querySelector("p");
    const quoteIcon = quoteCard.querySelector("svg");
    const authorLine = quoteCard.querySelector(".bg-primary\\/20");
    
    quoteCard.addEventListener("mouseenter", () => {
      gsap.to(quoteText, {
        x: 5,
        color: "#1A1A1A",
        duration: 0.8,
        ease: "power2.out"
      });
      gsap.to(quoteIcon, {
        scale: 1.1,
        opacity: 0.4,
        duration: 0.8,
        ease: "power2.out"
      });
    });
    
    quoteCard.addEventListener("mouseleave", () => {
      gsap.to(quoteText, {
        x: 0,
        color: "rgba(26, 26, 26, 0.8)",
        duration: 0.8,
        ease: "power2.inOut"
      });
      gsap.to(quoteIcon, {
        scale: 1,
        opacity: 0.2,
        duration: 0.8,
        ease: "power2.inOut"
      });
    });
  }

  // Hero text animation
  const heroTitle = document.querySelector("h1");
  if (heroTitle) {
    // Kill any existing animations on this element
    gsap.killTweensOf(heroTitle);
    
    gsap.fromTo(heroTitle, 
      { 
        y: 20, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "opacity" // Ensure it doesn't get stuck with inline opacity
      }
    );
  }
}
