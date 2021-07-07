const readline = require("readline")

module.exports.prompt = (...question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve) => {
    rl.question(question.join(' '), (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}

module.exports.print = console.log