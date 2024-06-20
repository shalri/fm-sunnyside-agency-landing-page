import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (
  className: string,
  threshold: number = 0.1,
) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(
              entry.target.getAttribute("data-index") || "0",
              10,
            );
            setVisibleItems((prev) => [...prev, itemIndex]);
          }
        });
      },
      { threshold },
    );

    const elements = document.querySelectorAll(className);
    elements.forEach((element) => observer.current?.observe(element));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [className, threshold]);

  return visibleItems;
};

export default useIntersectionObserver;
