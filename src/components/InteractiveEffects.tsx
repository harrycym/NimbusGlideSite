"use client";

import { useEffect } from "react";

export default function InteractiveEffects() {
  useEffect(() => {
    // --- Mouse-tracking glow on all cards ---
    const cards = document.querySelectorAll<HTMLElement>(
      "[data-glow], .glow-card"
    );

    function handleMouseMove(e: MouseEvent) {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    }

    document.addEventListener("mousemove", handleMouseMove);

    // --- Tilt effect on hover for [data-tilt] elements ---
    const tiltEls = document.querySelectorAll<HTMLElement>("[data-tilt]");

    function handleTiltMove(this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * -8;
      const tiltY = (x - 0.5) * 8;
      this.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    }

    function handleTiltLeave(this: HTMLElement) {
      this.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    }

    tiltEls.forEach((el) => {
      el.style.transition = "transform 0.3s ease";
      el.addEventListener("mousemove", handleTiltMove);
      el.addEventListener("mouseleave", handleTiltLeave);
    });

    // --- Magnetic buttons ---
    const magneticBtns = document.querySelectorAll<HTMLElement>("[data-magnetic]");

    function handleMagneticMove(this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      this.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    }

    function handleMagneticLeave(this: HTMLElement) {
      this.style.transform = "translate(0, 0)";
    }

    magneticBtns.forEach((btn) => {
      btn.style.transition = "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
      btn.addEventListener("mousemove", handleMagneticMove);
      btn.addEventListener("mouseleave", handleMagneticLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      tiltEls.forEach((el) => {
        el.removeEventListener("mousemove", handleTiltMove);
        el.removeEventListener("mouseleave", handleTiltLeave);
      });
      magneticBtns.forEach((btn) => {
        btn.removeEventListener("mousemove", handleMagneticMove);
        btn.removeEventListener("mouseleave", handleMagneticLeave);
      });
    };
  }, []);

  return null;
}
