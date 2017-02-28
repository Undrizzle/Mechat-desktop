import { app, BrowserWindow, ipcMain, Menu } from 'electron'

let mainWindow = null

app.on('window-all-closed', () => {
    app.quit()
})

let winProps = {
    width: 1000,
    height: 800,
    titleBarStyle: 'hidden-inset'
}

app.on('ready', () => {
    mainWindow = new BrowserWindow(winProps)

    mainWindow.loadURL(`file://${__dirname}/index.template.html`)

    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.on('closed', () => {
        mainWindow = null
    })
})