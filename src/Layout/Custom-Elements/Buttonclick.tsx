export const ButtonDebounce = (fn: any, time: number) => {
  let times: any = null;
  return function () {
    clearTimeout(times);
    times = setTimeout(() => {
      fn();
    }, time);
  };
};
