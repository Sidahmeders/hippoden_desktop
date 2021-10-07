const { ipcRenderer, contextBridge } = require('electron')
// const { BrowserWindow, Menu, dialog } = require('@electron/remote')

// const win = new BrowserWindow()

// require('@electron/remote/main').enable(win.webContents)

const os = require('os')

// let win = new BrowserWindow({
//     title: 'My First App',
//     maxHeight: 600,
//     maxWidth: 600,
//     minHeight: 400,
//     minWidth: 400,
//     frame: false
// })
// win.loadURL('https://www.electronjs.org/docs/api/remote')

// const webContent = win.webContents

// function createWindow() {}

const { readFileSync } = require('fs')
function readConfig() {
    const data = readFileSync(`${__dirname}/manifest.json`)
    return data
}

contextBridge.exposeInMainWorld('TestApis', {
    osCount: os.cpus().length
})

contextBridge.exposeInMainWorld('NodeCustomApis', {
    readConfig,
    getUsage: (args) => ipcRenderer.invoke('get-cpu-usage', args)
})
