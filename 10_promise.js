
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => new Promise((resolve) => setTimeout(resolve,2000));

// console.log(1)
// const promise = sleep(1000).then(() => console.log("fin"))
// console.log(promise)
// console.log(2)

module.exports = {sleep};