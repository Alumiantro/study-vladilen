// Function
// 1. Function Declaration. Можно обратиться к функции и до, и после ее создания
// function greet(name) {
//     console.log('Hello, ' + name)
// }

// 2. Function Expression (функция в переменноЙ) Нельзя обратиться к функции до ее создания
// const greet2 = function greet2(name) {
//     console.log('Hello, 2 ' + name)
// }

// greet2('Adelya')
// greet('Adelya')

// console.log(typeof greet) // function
// console.dir(greet) // тип данных функций - объект

// 3. Анонимные функции (функции без названия)
// let counter = 0

// const interval = setInterval(function() { // setInterval
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)}
// }, 1000)


// 4. Стрелочная функция

// function greet(name) {
//     console.log('Hello, ' + name)
//  }

// const arrow = (name) => {
//     console.log('Hello, ' + name)
// } 
// arrow('Adelya')

// const arrow2 = name => console.log('Hello, ' + name) // сокращение. если передаваемый параметр один, то можно не заключать в скобки, если больше - то необходимо
// arrow2('Adelya')

// const pow2 = num => num ** 2 // возведение в степень
// console.log (pow2(23))


// 5. Параметры по умолчанию

// const sum = (a, b) => a + b
// console.log(sum(23, 3))

// const sum = (a, b) => a + b
// console.log(sum(23)) // если не присвоить значение, то будет NaN, для этого нужны параметры по умолчанию

// const sum = (a, b = 1) => a + b // можно задать, например, b = a * 2
// console.log(sum(23, 2))

// function sumAll(...all) { // функция может иметь множество значений
//     console.log(all)
// }

// sumAll(12, 3, 4, 6, 6, 9) // js создает массив

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result = result + num
//     }
//     return result
// }

// const res = sumAll(12, 3, 4, 6, 6, 9)
// console.log(res)

// Замыкания

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Adelya') 
console.log(logWithLastName) // возвращает ƒ (lastName) {console.log(name + lastName)}
console.log(logWithLastName('Ziatdinova')) // так присваеваем значение lastName
// те параметр createMember становится приватным, функция никак не может оперировать с этим параметром