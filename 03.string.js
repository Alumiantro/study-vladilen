// const name = 'Adelya'
// const age = 19
// const output = 'My name is ' + name + ' and my age ' + age + ' years.' // устаревшее

// function getAge() {
//     return age
// }

// const output = `My name is ${name} and my age ${getAge()} years` //  можно использовать любое выражение: функцию, переменную, тернарные выражения и тд. Использовать if else нельзя

// const output = `My name is ${name} and my age ${age < 20 ? 'A' : 'B'} years` // тк 19 меньше 20, то будет значение А (тру)
// console.log(output)

// const output = `
// <div>This is div<div>
// <p>This is p<p>
// `
// console.log(output)

const name = 'Adelya' // преобразование в объект newString
console.log(name.length)
console.log(name.toUpperCase()) // верхний регистр
console.log(name.toLowerCase()) // нижний регистр
console.log(name.charAt(2)) // на определенной позиции значение (e)
console.log(name.indexOf('lya')) // присутствует ли в строчке определенная комбинация строк (подстрока). Показывает с какого индекса начинается подстрока (3). Если введено несуществующее значение, то -1
console.log(name.startsWith('Ade')) // с чего начинается строка
console.log(name.toLowerCase().startsWith('ade')) // сначала приводим к нижнему регитстру, потом с чего начинается строка (true)
console.log(name.endsWith('lya')) // как заканчивается строка
console.log(name.repeat(3))

const string = '    probel     ' // пробел такой же символ строки, как и другие, но иногда может считать за баг
console.log(string.trim()) // очищаем все пробелы
console.log(string.trimLeft()) // также с right, очищение пробелов с одной стороны

