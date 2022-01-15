// Number
// const num = 22 // integer (целое число)
// const float = 22.22 // float (дробное значение)
// const pow = 10e3 // 10 000

// console.log(Number.MAX_SAFE_INTEGER) // Максимальное число, с которым можно проводить операции
// console.log('Чтобы показать строку, пиши так', Math.pow(2, 53) - 1)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY) // 2/0 при делении на ноль
// console.log(Number.NaN) // вычислительная ошибка Not A Number
// const weird = 2 / undefined
// console.log(isNaN(weird)) // чтобы узнать,является ли число NaN
// console.log(Number.isNaN(weird))
// console.log(Number.isFinite(weird)) // чтобы узнать, является ли число конечным
// console.log(Number.isFinite(Infinity)) // бесконечность не является конечной
// console.log(Number.isFinite(42)) //число является конечным

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt + 2) // конкатенация (строчка прибавляется к строчке, 422)

// console.log(Number.parseInt(stringInt) + 2) // парсинг берет строку и возвращает число
// console.log(Number(stringInt) + 2) // оборачиваем в число значение в ''
// console.log(+stringInt + 2) // с помощью + преобразуем в число строку

// console.log(Number.parseInt(stringFloat) + 2) // parseInt работает только с целыми числами, дробное окончание как бы отметает
// console.log(Number.parseFloat(stringFloat) + 2) // используем parseFloat, чтобы работать с дробными числами

// console.log(0.4 + 0.2) // 0.6
// console.log((4 / 10) + (2 / 10)) 
// console.log((0.4 + 0.2).toFixed(1)) // метод позволяет оставить необходимое количество символов после запятой
// console.log(+(0.4 + 0.2).toFixed(1)) // проблема - значение не является числом, поэтому ставим + перед группой, чтобы сделать ее числом

// console.log(parseFloat((0.4 + 0.2).toFixed(1)))


// BigInt
// console.log(typeof 9007199254740991) // number
// console.log(typeof 9007199254740991n) // bigint (тк появляется n)
// console.log(900719925474099091n - 9007199254740991n) // bigint работает только с bigint
// console.log(-9007199254740991n) // есть отрицательные значения
// console.log(9007199254740991.3942039n) // оперировать с дробными значениями нельзя, тк integer

// console.log(10n - 87) // нельзя миксовать типы данных
// console.log(parseInt ( 10n ) - 34) // bigint перевести в number
// console.log(10n - BigInt ( 34 ))
// console.log(5n / 2n) // 2, тк Integer

// Math объект
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt (25)) // квадратный корень
// console.log(Math.pow (5, 2)) // в степень
// console.log(Math.abs (-45)) // модуль (получаем положительное значение)
// console.log(Math.max (12, 34, 345345, 52))
// console.log(Math.min (23, 34, 3))
// console.log(Math.floor (4.6)) // всегда округляет в меньшую сторону
// console.log(Math.ceil (2.1)) // всегда округляет в большую сторону
// console.log(Math.round(34)) // округление к близжайшему целому (5)
// console.log(Math.trunc(23.34)) // округление путем удаления всех дробных знаков
// console.log(Math.random(), 'math random')

// 4 Example

function getRandomBetween (min, max) {
    return Math.floor (Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetween (17, 25))
