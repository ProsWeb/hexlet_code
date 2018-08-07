/*
Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, 
которая определяет, является ли переданное число натуральной степенью тройки. 
Например, число 27 это третья степень (33), а 81 это четвертая (34).
Пример:

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
*/

export default (n) => {
  for (let iter = 0; 3 ** iter <= n; iter += 1) {
    if (3 ** iter === n) {
      return true;
    }
  } return false;
};