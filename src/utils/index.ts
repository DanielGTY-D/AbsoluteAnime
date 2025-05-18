export const lazyFetch = async (fn: () => void) => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, 1500);
  });
};
