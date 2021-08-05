const fs = require('fs')
let fileWritten = false

fs.writeFile('./out.txt', 'test from here', (err, data) => {
  if (err) return console.log(err)
  console.log('hello from unexecuted callback')
  fileWritten = true
})

console.log('first log')

const cbTimer = setInterval(() => {
  if (fileWritten === true) {
    console.log(fileWritten)
    clearInterval(cbTimer)
  };
}, 100)

console.log('after the call back')
