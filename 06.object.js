const person = {
    name: 'Adelya',
    age: 20,
    languages: ['ru', 'en'],
    'можно положить сложные ключи в строки': 'hard',
    ['key_' + (1 + 3)]: 'вот такие разные ключи', // key_4
    greet() {
        console.log('greet from person')
    },
    //новый синтаксис
    // greet: function() {} // эта функция является методом, тк находится внутри объекта
    info() {
        console.info('Information about person by name:', this.name) // person.name не очень хорошо то, что обращаемся в созданной переменной к этой же переменной
    }
}
// console.log(person.greet)
// console.log(person['age'])
// const ageKey = 'age'
// console.log(person[ageKey]) //таким образом можно обращаться к динамическим ключам, и к ключам как к строке
// person.age++
// person.languages.push('by')
// person['key_4'] = undefined // также можно работать со значениями в объекте
// delete person['key_4']
// console.log(person)

//* Деструктуризация
// const name = person.name
// const age = person.age
// const languages = person.languages  // слишком много дублирования кода
// const {name, age: personAge = 10, languages} = person // переменные создаются сами, значения берутся из объекта
// можно задать новое название переменной 
// console.log(name, personAge, languages)
// console.log(person)

//* Объекты не иттерируемые
// for (let key in person) {
//   if (person.hasOwnProperty(key)) { // только то, что есть в СВОЙСТВАХ самого объекта, а не в прототипе
//   console.log('key:', key)
//   console.log('value:', person[key])
//   }
// }// опасен тем, что пробегается не только по ключам объекта, но и по прототипу
// const keys = Object.keys(person) // можно убрать
// keys.forEach((key) => { // колбэк принимает каждый иттерируемый элемент
//   console.log('key:', key)
//   console.log('value:', person[key])
// })
//* Context
const logger = {
    keys() { // можно также написать obj, принимать объект как параметр
        console.log('Objects keys: ', Object.keys(this)) // можно также написать obj
        // теперь можно пользоваться методом keys, выводя в консоль любой объект 
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`'${key}' : '${this[key]}'`)
        })
    },
    params(top = false, between = false, bottom = false) {
        if (top) {
            console.log('работает начало')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`'${key}' : '${this[key]}'`)
            if (between && index !== array.length - 1) {
                console.log('--------')
            }
        })
        if (bottom) {
            console.log('это передан 2 параметр')
        }
    }
}

// const logger = {
//     keys() { // можно также написать obj, принимать объект как параметр
//         console.log('Objects keys: ', Object.keys(this)) // можно также написать obj
         // теперь можно пользоваться методом keys, выводя в консоль любой объект 
//     },

//     keysAndValues() {
//     const self = this // сохранить тут контекст и обращаться к нему в консоли (self[key])
//         Object.keys(this).forEach(function(key) { если использовать fnct, будет выводится только значение name, все остальное - undefined (так работает контекст function)
//             console.log(`'${key}' : '${this[key]}'`)
//         }.bind(this)) // или привязаться контекст
//     }
// }

// logger.keysAndValues.call(person)
logger.params.call(person, true, true, true)

// const bound = logger.keys.bind(person) // метод bind привязывает контекст, который мы сами выберем
// bound()
// logger.keys.call(person) // не нужно вызывать функцию, Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.


