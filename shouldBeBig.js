/*
Реализуйте и экспортируйте по умолчанию функцию, 
которая делает заглавной первую букву каждого слова в предложении.
solution('hello, world!'); // Hello, World!
*/

const Upper = (str) => {
  let result = str[0].toUpperCase();
  let i = 1;
  while (i < str.length) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
    i += 1;
  } return result;
};