/*
Реализуйте и экспортируйте по умолчанию функцию reverseInt, 
которая переворачивает цифры в переданном числе и возвращает новое число.
reverseInt(13); // 31
reverseInt(-123); // -321
*/

const reverseInt = (num) => {
  let result = '';
  let i = 1;
  const StringNum = String(Math.abs(num));
  while (i <= StringNum.length) {
    result += StringNum[StringNum.length - i];
    i += 1;
  }
  return num > 0 ? Number(result) : -Number(result);
};