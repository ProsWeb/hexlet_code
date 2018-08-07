/*
Реализуйте и экспортируйте по умолчанию функцию reverse, которая переворачивает строку.
Пример: reverse('hello, world!'); // !dlrow ,olleh
*/

const reverse = (str) => {
  let result = '';
  let i = 1;
  while (str.length >= i) {
    result += str[str.length - i];
    i += 1;
  }
  return result;
};