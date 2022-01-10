"use strict"
const n = 10
//finding divisors of a number
const divisors = []
for (let i = 1; i <= n; i++) {
  if (Math.floor(n / i) === n / i) {
    divisors.push(i)
  }
}
//removing the number itself from array
divisors.splice(divisors.indexOf(n), 1)
//calculatin the sum of array
const sum = divisors.reduce((sum, number) => {
  return sum + number
}, 0)
//checking if the number is a whole number

console.log(n === sum ? "YES" : "NO")
