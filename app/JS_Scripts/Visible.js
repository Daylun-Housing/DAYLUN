import { useEffect, useState } from "react";

export function useIsVisible(ref) {
  

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return; 

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
