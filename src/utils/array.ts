export const removeEmpty = (arr: string[] = []) => {
  return arr.filter((el) => el);
};

export const stringToArray = (text: string, splitText: string = " ") => {
  return removeEmpty(text.split(splitText));
};

export const activePathString = (
  path: string,
  splitText: string = "/",
  isDynamic?: boolean
) => {
  const pathArray = stringToArray(path, splitText);
  // isDynamic ? pathArray?.length - 1 :
  return pathArray.slice(1, 2).join("/");
};

export const pathString = (path: string, splitText: string = "/") => {
  return stringToArray(path, splitText).slice(1, 3).join("/");
};
