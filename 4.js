"use strict"
const isNecklacesString = function (necklaces, string) {
  const realNecklaces = necklaces.repeat(3)
  return realNecklaces.includes(string)
}
// easy peasy lemon squeezy
console.log(isNecklacesString("TurboFront", "boFrontTur"))
