// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

console.log("Задача 1");

const person = {
  name: "Nikita",
  age: "18",
  country: "Russia",
  isStudentAroken: true,
};

console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

console.log("Задача 2");

const test = {};
const test2 = {
  name: "nikita",
};

const isEmpty = (obj) => {
  for (const key in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty(test));
console.log(isEmpty(test2));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

console.log("Задача 3");

const task = {
  title: "Заголовок задания",
  description: "Описание задания",
  isCompleted: false,
};

const anotherTask = {
  title: "Изменный заголоввок",
  subtitle: "Дополнительный заголовок",
  isCompleted: true,
};

const cloneAndModify = (obj, modifications) => {
  const copy = { ...obj, ...modifications };
  for (const key in copy) {
    console.log(`${key} = ${copy[key]}`);
  }
};

cloneAndModify(task, anotherTask);

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

console.log("Задача 4");

const testObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
};

callAllMethods(testObject);

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
