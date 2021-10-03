const { contextBridge } = require('electron')

const { readFileSync } = require('fs')
function readConfig() {
    const data = readFileSync(`${__dirname}/manifest.json`)
    return data
}

function greeting(x) {
    return `Hello : ${x}`
}

contextBridge.exposeInMainWorld('TestApis', {
    greeting
})

contextBridge.exposeInMainWorld('NodeCustomApis', {
    readConfig
})
