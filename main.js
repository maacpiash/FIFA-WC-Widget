const {app, BrowserWindow} = require('electron')
  
let win
  
function createWindow () {
    win = new BrowserWindow({
        width: 200,
        height: 150,
        frame: false,
        alwaysOnTop: true
    })
    win.loadURL("https://www.google.com/search?&q=world+cup")
    win.on('closed', () => {
        win = null
        app.quit()
    })
}
  

app.on('ready', createWindow)
app.on('window-all-closed', () => { app.quit() })
app.on('activate', () => { createWindow() })
  