export const delay = (inter = 1000) => {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved();
    }, inter);
  });
};
