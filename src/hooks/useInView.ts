import { MutableRefObject, useEffect, useRef, useState } from "react";

const useInView = <T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {}
): [MutableRefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
};

export default useInView;
