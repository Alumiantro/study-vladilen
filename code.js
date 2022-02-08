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
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve
            // reject('Что-то пошло не так')
        }, wait)
    })
    return promise
}

// delay(2500)
//     .then(() => {
//         console.log('After 2 second')
//     })
//     .catch(err => console.error('Error:', err))
//     .finally(() => console.log('Finally'))


const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5
]))

// getData().then(data => console.log(data)) 

async function asyncExample() { // async делает функцию ассинхронной
    await delay(2500) // хотим дождаться выполнения этой функции, и потом переходить в getdata
    const data = await getData()
    console.log('Data', data)
}
asyncExample()