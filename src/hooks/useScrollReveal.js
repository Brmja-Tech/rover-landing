import { useEffect, useRef, useState } from "react";

function useScrollReveal(
  threshold = 0.12,
  rootMargin = "0px 0px -60px 0px",
  revealOnce = true,
) {
  const revealRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(
    function () {
      var element = revealRef.current;
      var firstFrame = 0;
      var secondFrame = 0;

      if (!element) {
        return;
      }

      var reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        setIsVisible(true);
        return;
      }

      var observer = new IntersectionObserver(
        function (entries) {
          var entry = entries[0];

          if (entry.isIntersecting) {
            /*
             * Waiting two animation frames ensures the browser renders
             * the hidden state before applying the visible animation.
             */
            firstFrame = window.requestAnimationFrame(function () {
              secondFrame = window.requestAnimationFrame(function () {
                setIsVisible(true);
              });
            });

            if (revealOnce) {
              observer.unobserve(element);
            }

            return;
          }

          if (!revealOnce) {
            setIsVisible(false);
          }
        },
        {
          threshold: threshold,
          rootMargin: rootMargin,
        },
      );

      observer.observe(element);

      return function () {
        observer.disconnect();
        window.cancelAnimationFrame(firstFrame);
        window.cancelAnimationFrame(secondFrame);
      };
    },
    [threshold, rootMargin, revealOnce],
  );

  return {
    revealRef: revealRef,
    isVisible: isVisible,
  };
}

export default useScrollReveal;