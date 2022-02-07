//*Event Loop

// const timeout = setTimeout(() => {
//     clearTimeout(timeout) // не сработает, тк мы уже обратились к timeout
//     console.log('After Timeout')
// }, 2500) // милисекунды

// clearTimeout(timeout) // сработает

// const interval = setInterval(() => {
         // clearInterval(interval) // 1 интервал сработает, остальные - нет 
//         console.log('After Interval')
//     }, 1000)
// clearInterval(interval) // функция не будет отображаться вообще

// const delay = (callback, wait = 1000) => {
//     setTimeout (callback, wait)
// }

// delay(() => {
//     console.log('After 2 second')
// }, 2000)

const delay = (wait = 1000) => {
    setTimeout(() => {

    }, wait)
}