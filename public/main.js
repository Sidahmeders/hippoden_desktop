const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path')
const si = require('systeminformation')

require('@electron/remote/main').initialize()

function createWindow() {
    const window = new BrowserWindow({
        width: 900,
        height: 600,
        minHeight: 350,
        minWidth: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'public/preload.js')
        }
    })

    window.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.handle('get-cpu-usage', async (event, args) => {
    let usage = await si.currentLoad()
    return usage
})
