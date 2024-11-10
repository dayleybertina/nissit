const subtract = (num1: number = 10, num2: number = undefined) => {
  if (typeof num2 === 'undefined') {
    return num1;
  }
  return num1 - num2;
};
