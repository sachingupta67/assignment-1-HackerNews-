import moment from "moment";
export const showTimeLikeAgo = (val: number) =>
  moment(Number(val)).startOf("hour").fromNow();

export const debounce = (fn: Function, delay: number) => {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

export const throlling = (fn: Function, delay: number) => {
  let flag: boolean = true;
  return () => {
    if (flag) {
      flag = false;
      fn();
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

export const dateFormatChange = (date: string) =>
  moment(Number(date)).format("ll"); // Jan 27, 2021
