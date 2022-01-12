// * 11 переменные
// camelCase если в переменной присутствуют 2 слова, то первое пишем с маленькой буквы, а второе-с большой 
// var firstName = 'Adelya' //better not to use
// const age = 19 //number
// const isProgrammer = true //boolean
// console.log(isProgrammer)

// 1.1 названия переменных
// const _private = 'private'
// const _ = 'it is normal'
// const $ = 'some value'
// const withNum5 = 'number'
// const 5error = 'nonono' название переменной не начинать с number
// const if = 'err' зарезервированные слова использовать в названии нельзя

// * 2 динамическая типизация, мутирование
// console.log('Name people: ' + firstName + ', age people: ' + age) // приводит значение number к string
// console.log(age) // тут значение остается с типом данных number

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// * 3 операторы

// 3.1. операторы чисел

// let currentYear = 2022
// const birthYear = 2002

// const age = currentYear - birthYear

// const a = 10
// const b = 20

// let c = 32
// c = c + a
// c += a //таким образом можно упрощать запись

// console.log(a+b, 'прибавление')
// console.log(currentYear++) //инкрементирование(увеличение на единицу) тк изначально выводится старое значение, оно не увеличивается на 1
// console.log(++currentYear) //декрементирование
// console.log(--currentYear) порядок имеет значение, если ставить --++ в начале, то он работает
// console.log(currentYear--)

// console.log(c)

// * 4 типы данных
// undefined, number, string, boolean, null - примитивные
// objects - objects

// const isProgrammer = true
// const name = 'Adelya'
// const age = 19
// let x 
// const x //в конст обязательно нужно что-то положить

// console.log(typeof isProgrammer) //оператор, который позволяет узнать тип данных
// console.log(typeof x)
// console.log(typeof age)
// console.log(typeof name)
// console.log(typeof null) //ошибка в жс

// * 5 приоритет операторов
// const fullAge = 19
// const birthYear = 2002
// const currentYear = 2022

// > < >= <= эти операторы отвечают за сравнение
// const isFullAge = currentYear - birthYear >= fullAge //20 >= 19
// console.log(isFullAge)

// * 6 Условные операторы
// const courseStatus = 'fail' //ready, fail, pending

// if (courseStatus === 'ready') {
// console.log('Курс уже готов')
// } //в кавычках () условие, {} то что выполняется, если условие совпадает
// else if (courseStatus === 'pending') {
//     console.log('Курс в процессе разработки')
//     }
// else {
//     console.log('Курс не получился')
// }

// const isReady = true // можно сократить запись не написав = true
// if (isReady === true) {
//     console.log ('Ready!')
// } else {
//     console.log ('No')
// }

// Тернарное выражение
// isReady ? console.log ('Ready') : console.log ('No') // то же самое, что сверху

// const num1 = 42 // number
// const num2 = '42' // string

// console.log (num1 == num2) // true сравнение по значению
// console.log (num1 === num2) //false строгое сравнение по значению и типу данных

// * 7 Булевая логика

// * 8 Функции

// function calculateAge (year) {
//     return 2022 - year
// }
// const myAge = calculateAge (2002)
// console.log (myAge)

// Либо без объявления переменной
// function calculateAge (year) {
//     return 2022 - year
// }
// console.log (calculateAge (2002))


// function logInfoAbout(name, year) {
// const age = calculateAge (year) // функция внутри функции

// if (age > 0){
//     console.log ('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// } else {
//     console.log ('This is future?')
// }
// }

// logInfoAbout ('Adelya', 2002)
// logInfoAbout ('Adelya', 2030)

// * 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд'] // Приоритетный способ создания массива
// const cars = newArray ('Мазда', 'Мерседес', 'Форд') Один из способов создания массива

// console.log (cars.length) // С помощью точки обращаемся к массиву
// console.log (cars[1])

// Можно менять значения элемента массива обращаясб к индексу этого элемента
// cars[0] = 'Mazda'
// console.log (cars)

// Можно добавлять в массив новые значения
// cars[4] = 'Porshe'
// cars[cars.length] = 'Scoda'


// * 10 Циклы
// const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log (car + ' машина')
// }

// for (let car of cars) {
//     console.log(car)
// }

// for (const currentNum of numbers) {
//     console.log(currentNum + ' число')
// }

// const кратныеДвум = []

// numbers.forEach((curElementArray) => {
//     if (curElementArray % 2 === 0) {
//         кратныеДвум.push(curElementArray)
//     }
// })
// console.log(кратныеДвум)

// * 11 Объекты // группировка разных структур
// const person = {
//     firstName: 'Adelya',
//     lastName: 'Ziatdinova',
//     year: 2002,
//     languages: ['Ru', 'En', 'Tat'],
//     hasChildren: false,
//     greet: function() {
//         console.log('greet')
//     }
// }

// for (const key in person) {
//     console.log(key, 'key')
//     console.log(person[key], 'person[key]')
// }

// console.log(person.firstName)
// console.log(person ['year']) // можно обращаться через скобочки

//динамически
// const key = 'languages'
// console.log(person[key])

//можно изменять значения
// person.lastName = 'Alekseev'
// console.log(person.lastName)

