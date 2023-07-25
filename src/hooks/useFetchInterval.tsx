import { useRef, useEffect } from "react";

export default function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef() as any;
  useEffect(() => {
    savedCallback.current = callback as any;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current() as any;
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
