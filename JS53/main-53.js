// Задание 1.
// Дан массив пользователей:

console.log("Задача 1");

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Добавьте в конец массива двух пользователей:

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

console.log("Задача 2");
const getUserAverageAge = (array) => {
  let sum = 0;
  let avg;
  array.forEach((obj) => {
    sum = sum + obj.age;
  });
  avg = sum / array.length;
  console.log(`Средний возраст сотрудников: ${avg} лет`);
};
getUserAverageAge(users);
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

console.log("Задача 3");

const getAllAdmins = (array) => {
  const admins = [];

  array.forEach((obj) => {
    if (obj.isAdmin) {
      return admins.push(obj);
    }
  });
  console.log(admins);
};

getAllAdmins(users);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

console.log("Задача 4");

const first = (arr, n) => {
  const newArray = new Array(n);
  if (n > arr.length) {
    console.log(`Число ${n} не может превышать длину массива ${arr.length}`);
    return;
  }
  if (n == 0) {
    return console.log(newArray);
  }
  if (n == undefined) {
    return console.log(users.shift());
  }
  for (let i = 0; i < n; i++) {
    newArray.push(arr[i]);
    console.log(arr[i]);
  }
};

first(users, 5);
