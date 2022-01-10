"use strict"
const isNecklacesString = function (necklaces, string) {
  const realNecklaces = necklaces.repeat(3)
  return realNecklaces.includes(string)
}
console.log(isNecklacesString("TurboFront", "boFrontTur"))
