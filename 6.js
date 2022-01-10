"use strict"
const a = [
  false,
  undefined,
  undefined,
  641165,
  "fdgdsfg",
  null,
  undefined,
  "dfgdsfg",
  46879,
  undefined,
  false,
  null,
  "dfgdfsgsdf",
  98746,
  "dfgsdfg",
  null,
  5644,
  false,
  false,
]
const b = [
  undefined,
  false,
  null,
  "dfgdfsgsdf",
  98746,
  undefined,
  "dfgdsfg",
  46879,
  undefined,
  false,
  null,
  "dfgdfsgsdf",
  98746,
  "dfgsdfg",
  null,
  5644,
  false,
  false,
]

const arrArr = function (arr1, arr2) {
  const cleaner = function (arrayToClean) {
    for (let i = 0; i < arrayToClean.length; i++) {
      if (arrayToClean[i] === false) {
        arrayToClean.splice(i, 1)
        i--
      } else if (arrayToClean[i] == null) {
        arrayToClean.splice(i, 1)
        i--
      } else if (
        typeof arrayToClean[i] === "number" &&
        isNaN(arrayToClean[i])
      ) {
        arrayToClean.splice(i, 1)
        i--
      }
    }
  }
  cleaner(arr1)
  cleaner(arr2)
  if (arr1.length >= arr2.length) {
    console.log("array #1 : \n", arr1)
  } else {
    console.log("array #2 : \n", arr2)
  }
  const output = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.push(arr1[i])
      }
    }
  }

  console.log("shared elements : \n", Array.from(new Set(output)))
}

arrArr(a, b)
