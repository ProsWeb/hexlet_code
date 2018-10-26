/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, 
состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка 
корректной. Пустая строка (отсутствие скобок) считается корректной.
Строка считается корректной (сбалансированной), 
если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. 
У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.
import areBracketsBalanced from 'roundBracketsValidator';

areBracketsBalanced('(())');  // true
areBracketsBalanced('((())'); // false
*/

const areBracketsBalanced = (str) => {
  let openBracketsCount = 0;
  let closeBracketsCount = 0;
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (str[i] === '(') {
      openBracketsCount += 1;
    }
    if (str[i] === ')') {
      closeBracketsCount += 1;
    }
    if (openBracketsCount < closeBracketsCount) {
      return false;
    }
  } return openBracketsCount === closeBracketsCount;
};