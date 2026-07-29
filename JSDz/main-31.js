// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

console.log("Задача 1 ");

const calculateFinalPrice = (basePrice, discount, tax) => {
  const percentDiscountPrice = basePrice - basePrice * (discount / 100);
  const taxPrice = percentDiscountPrice * tax;
  return percentDiscountPrice + taxPrice;
};

console.log(calculateFinalPrice(100, 10, 0.2)); // 108
console.log(calculateFinalPrice(100, 10, 0)); // 90

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

console.log("Задача 2 ");

const checkAccess = (username, password) => {
  if (username === "admin" && password === "123456") {
    return console.log("Доступ Разрешен");
  } else {
    return console.log("Доступ запрещен");
  }
};

checkAccess("admin", "123456");
checkAccess("user", "123");

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

console.log("Задача 3 ");

const getTimeOfDay = (currentTime) => {
  currentHour = Number(currentTime);
  if (currentHour >= 0 && currentHour <= 5) {
    return console.log("Ночь");
  } else if (currentHour >= 6 && currentHour <= 11) {
    return console.log("Утро");
  } else if (currentHour >= 12 && currentHour <= 17) {
    return console.log("День");
  } else if (currentHour >= 18 && currentHour <= 23) {
    return console.log("Вечер");
  } else return console.log("Некорректное время");
};

getTimeOfDay("23");

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

console.log("Задача 4 ");

const findFirstEven = (start, end) => {
  for (start; start <= end; start++) {
    if (start % 2 === 0) {
      return console.log(start);
    }
  }
  return console.log("Четных чисел нет");
};
findFirstEven(1, 10); // 2
findFirstEven(9, 9); // "Чётных чисел нет"

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
