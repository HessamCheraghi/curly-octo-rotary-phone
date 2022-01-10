"use strict"
// sample data
const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut {{@labore}} et dolore https://developer.mozilla.org/ magna aliqua. Tellus mauris a diam maecenas sed enim ut sem. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eleifend mi in nulla posuere https://javascript.info/ sollicitudin aliquam ultrices sagittis orci. At volutpat diam ut venenatis tellus. Urna{{@porttitor}}rhoncus dolor purus non enim praesent elementum. In eu mi bibendum neque. Risus quis varius quam quisque id diam. Vitae https://scotch.io/tag/jav ascript sapien pellentesque habitant morbi tristique senectus. Nibh sit amet commodo nulla. Ut etiam sit amet nisl purus. Porttitor leo a {{@diam}} sollicitudin tempor id.`

const textProcessor = function (string) {
  // dividing the question into separate parts:
  // this function wraps a span around usernames.
  const userProcessor = function (string) {
    // finding the index of the user name.
    const startIndex = string.indexOf("{{")
    const startUsername = string.indexOf("@", startIndex)
    const endIndex = string.indexOf("}}", startIndex)
    // getting the username itself.
    const username = string.slice(startUsername + 1, endIndex)
    // all the text before {{
    const textBeforeUser = string.slice(0, startIndex)
    // all the text after }}
    const textAfterUser = string.slice(endIndex + 2)
    return `${textBeforeUser}<span class="text-user">${username}</span>${textAfterUser}`
  }
  // this function changes urls into proper anchor tags.
  const urlProcessor = function (string, beginFrom) {
    // finding the index of the url.
    // search must start after closing anchor tag.
    const startIndex = string.indexOf("http", beginFrom)
    // the url finishes when a space comes after it.
    const endIndex = string.indexOf(" ", startIndex)
    // getting the url itself.
    const url = string.slice(startIndex, endIndex)
    // text after url.
    const textBeforeURL = string.slice(0, startIndex)
    // text after url.
    const textAfterURL = string.slice(endIndex)
    return `${textBeforeURL}<a href="${url}" class="text-link">${url}</a>${textAfterURL}`
  }

  let output = string
  // repeating the process until there are no {{}} in the text.
  while (output.indexOf("{{") !== -1) {
    output = userProcessor(output)
  }

  let i = 0
  // repeating the process for string that comes after closing anchor tag.
  while (output.indexOf("http", i) !== -1) {
    output = urlProcessor(output, i)
    i = output.indexOf("</a>", i) + 1
  }

  return output
}
console.log(textProcessor(data))
