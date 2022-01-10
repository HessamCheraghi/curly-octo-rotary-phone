"use strict"
// dummy password
const password = "239"
const checkIfPrime = function (number) {
  // finding divisor of a number.
  const divisors = []
  for (let i = 1; i <= number; i++) {
    if (Math.floor(number / i) === number / i) {
      divisors.push(i)
    }
  }
  // if it has only two divisors (one and itself) then it's a prime number.
  return divisors.length === 2 ? true : false
}

for (let i = password.length; i > 0; i--) {
  // removing the last character of password and checking if it's a prime number.
  const condition = checkIfPrime(Number(password.slice(0, i)))
  if (!condition) {
    // if it isn't a prime number say no and exit the loop.
    console.log("No")
    break
  } else if (i === 1) {
    // if it's last iteration in the loop say yes and finish.
    console.log("Yes")
  }
}
