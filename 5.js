"use strict"
const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut {{@labore}} et dolore https://developer.mozilla.org/ magna aliqua. Tellus mauris a diam maecenas sed enim ut sem. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eleifend mi in nulla posuere https://javascript.info/ sollicitudin aliquam ultrices sagittis orci. At volutpat diam ut venenatis tellus. Urna{{@porttitor}}rhoncus dolor purus non enim praesent elementum. In eu mi bibendum neque. Risus quis varius quam quisque id diam. Vitae https://scotch.io/tag/jav ascript sapien pellentesque habitant morbi tristique senectus. Nibh sit amet commodo nulla. Ut etiam sit amet nisl purus. Porttitor leo a {{@diam}} sollicitudin tempor id.`

const textProcessor = function (string) {
  const userProcessor = function (string) {
    const startIndex = string.indexOf("{{")
    const startUsername = string.indexOf("@", startIndex)
    const endIndex = string.indexOf("}}", startIndex)
    const username = string.slice(startUsername + 1, endIndex)
    const textBeforeUser = string.slice(0, startIndex)
    const textAfterUser = string.slice(endIndex + 2)
    return `${textBeforeUser}<span class="text-user">${username}</span>${textAfterUser}`
  }

  const urlProcessor = function (string, beginFrom) {
    const startIndex = string.indexOf("http", beginFrom)
    const endIndex = string.indexOf(" ", startIndex)
    const url = string.slice(startIndex, endIndex)
    const textBeforeURL = string.slice(0, startIndex)
    const textAfterURL = string.slice(endIndex)
    return `${textBeforeURL}<a href="${url}" class="text-link">${url}</a>${textAfterURL}`
  }

  let output = string

  while (output.indexOf("{{") !== -1) {
    output = userProcessor(output)
  }

  let i = 0
  while (output.indexOf("http", i) !== -1) {
    output = urlProcessor(output, i)
    i = output.indexOf("</a>", i) + 1
  }

  return output
}
