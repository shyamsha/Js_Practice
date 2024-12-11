import React from "react";

function useSize(ref) {
  const [size, setSize] = useState({});
  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(([entry]) =>
        setSize(entry.contentRect)
      );
      observer.observe(ref.current);
      return () => observer.unobserve(ref.current);
    }
  }, []);

  return size;
}

export default useSize;
