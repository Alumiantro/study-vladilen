// Number
const num = 22 // integer (целое число)
const float = 22.22 // float (дробное значение)
const pow = 10e3 // 10 000

console.log(Number.MAX_SAFE_INTEGER) // Максимальное число, с которым можно проводить операции
console.log('Чтобы показать строку, пиши так', Math.pow(2, 53) - 1)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY) // 2/0 при делении на ноль
console.log(Number.NaN) // вычислительная ошибка Not A Number
const weird = 2 / undefined
console.log(isNaN(weird)) // чтобы узнать,является ли число нан
console.log(Number.isNaN(weird))
console.log(Number.isFinite(weird)) // чтобы узнать, является ли число конечным
console.log(Number.isFinite(Infinity)) // бесконечность не является конечной
console.log(Number.isFinite(42)) //число является конечным

const stringInt = '42'

