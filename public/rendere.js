// use the exposed API in the renderer
// const { osCount } = window.TestApis
const { readConfig, getUsage } = window.NodeCustomApis

const jsonFile = readConfig()

console.log(jsonFile)
