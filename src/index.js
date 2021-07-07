const path = require("path")
const fs = require("fs")

const files = fs.readdirSync(__dirname)
	.filter(file => (
        file !== "index.js"
    ))
	.map(file => ({ 
        namespace: file.split('.').shift(), 
        exports: require(path.join(__dirname, file)) 
    }))
    .reduce((acc, cur) => ({ ...acc,  [cur.namespace]: cur.exports}), {})

module.exports = files