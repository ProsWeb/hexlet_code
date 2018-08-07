/*
Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как числового, так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
isHappyTicket('054702'); // true
*/

const isHappyTicket = (num) => {
  const StringNum = String(num);
  const FirstThreeNum = Number(StringNum.substr(0, 1)) + Number(StringNum.substr(1, 1)) + Number(StringNum.substr(2, 1));
  const SecondThreeNum = Number(StringNum.substr(3, 1)) + Number(StringNum.substr(4, 1)) + Number(StringNum.substr(5, 1));
  return FirstThreeNum === SecondThreeNum;
};