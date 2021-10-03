// use the exposed API in the renderer
const greet = window.TestApis.greeting('boyka')
console.log(greet)

const jsonFile = window.NodeCustomApis.readConfig()
console.log(jsonFile)
