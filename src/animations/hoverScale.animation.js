export const hoverScale = {
  initial: {
    width: "20.3125rem",
    zIndex: 5,
    transition: {
      duration: 0.1,
      type: "tween",
      delayChildren: 1,
    },
  },
  hover: {
    width: "30rem",
    zIndex: 10,
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};

export const removeTruncate = {
  initial: {
    height: "30%",
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    height: "auto",
  },
};
