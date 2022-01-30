//* Массивы

const cars = ['Мазда', 'БМВ', 'Порше']
const numbers = [23, 45, 2, 58] // в массив можно класть разные значения: булеан, стринг, намбер и тд

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

// * Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('') // split разбивает объект String на массив строк путём разделения строки указанной подстрокой // join объединяет все элементы массива в строку
// console.log(reverseText)

// const cars = ['Мазда', 'БМВ', 'Порше']
// const index = cars.indexOf('БМВ') // выдает индекс элемента, который ищем. хорошо работает с примитивными типами данных
// const index = cars.findIndex('БМВ')
// console.log(cars[index]) // через квадратные скобки обращаемся в индексу того элемента, который хотим получить
// cars[index] = 'Lada' // меняем значение этого индекса
// console.log(cars[index])

const people = [
    {name: 'Adelya', age: 19, budget: 1200},
    {name: 'Aliya', age: 17, budget: 4500},
    {name: 'Vika', age: 20, budget: 8000}
]

// const index = people.findIndex(function(person) {
// return(person.age === 19)
// })
// console.log(index)

// const peopleAge = people.find(function(person) {
//     return(person.age === 19)
// })
// console.log(peopleAge) // можно найти сразу же элемент массива, а не индекс

//* Стрелочная функция
// const peopleAge = people.find((person) => {
//     return(person.age === 19) 
// }) 
// console.log(peopleAge)

//* Сократим еще
// const peopleAge = people.find(person => (person.age === 19)) 
// console.log(peopleAge)

//* Цикл
// let findPerson
// for (const person of people) {
//     if (person.age === 19) {
//         findPerson = person
//     }
// }

// console.log(findPerson)

// console.log (cars.includes ('Мазда')) // булевое значение

// const upperCaseCars = cars.map(car => { //Метод map вызывает переданную функцию 1 раз для каждого элемента, и конструирует новый массив из результатов её вызова. Не изменяет массив, для которого он был вызван
//     return car.toUpperCase ()
// })
// console.log (upperCaseCars)

//* как можно улучшить написание кода снизу
// const exponentiate = num => num ** 2
// const sqrtNum = num => Math.sqrt (num)

// const numbersExponentiate = numbers.map(exponentiate).map(sqrtNum) // numbers.map (exponentiate) возвращает массив, поэтому к нему также можно применить методы
// console.log (numbersExponentiate)

// const numbersExponentiate = numbers.map (exponentiate)
// если есть необходимость отфильтровать
// const filteredNumbers = numbersExponentiate.filter (num => num > 20)
// метод filter возвращает новый массив, поэтому задаем новую переменную
// console.log (filteredNumbers)

const allBudget = people
.filter(people => people.budget > 2000)
.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)