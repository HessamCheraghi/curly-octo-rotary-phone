"use strict"
// dummy object
const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
  are: null,
  na: undefined,
  chi: NaN,
  ha: "",
  chera: 0,
  ooow: {
    beKhoda: null,
    rastMigi: 12,
    boro: "fdsg",
    alaki: undefined,
    inTorPas: {
      hehe: null,
    },
  },
}
// I'm using recursion in here!
const nullCatcher = function (obj, lastPropertyName = "") {
  // first loop through all properties of the object.
  // for-in loop CAN loop through an object!
  for (const property in obj) {
    if (obj[property] == null) {
      // if it's null or undefined say the property name.
      console.log(lastPropertyName + " " + property)
    } else if (typeof obj[property] === "object") {
      // if it's a nested object call this function again and redo the process...
      nullCatcher(obj[property], lastPropertyName + " " + property)
    }
  }
}
nullCatcher(person)
