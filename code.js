//* Массивы

// const cars = ['Мазда', 'БМВ', 'Порше']
// const num = [23, 45, 2, 58] // в массив можно класть разные значения: булеан, стринг, намбер и тд

//* Function
// function sega() {}

// Method если функция вызывается в контексте объекта-то это метод
// cars.push('Калина') // добавляем значение в конец
// cars.unshift('Волга') // добавляем значение в начало
// cars.shift() // удаляет и возвращает первое значение

// const firstCar = cars.shift() // можем оберунть в переменную и поработать над ней
// const lastCar = cars.pop() // уждаление последнего элемента массива

// console.log(firstCar)
// console.log(lastCar)
// console.log(cars) 

// console.log(cars.reverse()) // переворачивает массив
// console.log(cars)

//* Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('') // split разбивает объект String на массив строк путём разделения строки указанной подстрокой // join объединяет все элементы массива в строку
// console.log(reverseText)

const cars = ['Мазда', 'БМВ', 'Порше']
const index = cars.indexOf('БМВ') // выдает индекс элемента, который ищем
console.log(cars[index]) // через квадратные скобки обращаемся в индексу того элемента, который хотим получить
cars[index] = 'Lada' // меняем значение этого индекса
console.log(cars[index])