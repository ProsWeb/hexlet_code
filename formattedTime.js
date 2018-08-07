/*
Реализуйте и экспортируйте по умолчанию функцию, 
которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, 
являющуюся временем в формате чч:мм.
Пример:

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34
*/

const formattedTime = (minute) => {
  if (Math.floor(minute / 60) < 10 && (minute % 60) < 10) {
    return `0${Math.floor(minute / 60)}:0${(minute % 60)}`;
  }
  if (Math.floor(minute / 60) < 10 && (minute % 60) >= 10) {
    return `0${Math.floor(minute / 60)}:${(minute % 60)}`;
  }
  if (Math.floor(minute / 60) >= 10 && (minute % 60) < 10) {
    return `${Math.floor(minute / 60)}:0${(minute % 60)}`;
  }
  if (Math.floor(minute / 60) >= 10 && (minute % 60) >= 10) {
    return `${Math.floor(minute / 60)}:${(minute % 60)}`;
  }
};