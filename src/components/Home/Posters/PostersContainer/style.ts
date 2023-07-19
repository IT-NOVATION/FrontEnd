export const variants = {
  enter: ({ direction }: { direction: number }) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: ({ direction, animate }: { direction: number; animate: boolean }) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: animate ? 0.5 : 0,
      },
    };
  },
};
