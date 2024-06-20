import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(threshold = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenViewed) {
          setHasBeenViewed(true);
        }
      },
      { threshold },
    );
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasBeenViewed, threshold]);
  return { ref, hasBeenViewed };
}
