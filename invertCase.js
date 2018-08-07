/*
Реализуйте и экспортируйте по умолчанию функцию invertCase, 
которая меняет в строке регистр каждой буквы на противоположный.

invertCase('Hello, World!') // hELLO, wORLD!
invertCase('I loVe JS') // i LOvE js
*/

const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  } return result;
};