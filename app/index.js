const { app, BrowserWindow } = require('electron');

var width = 1920;
var height = 1080;

function createWindow() {
    const win = new BrowserWindow({
        width,
        height,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            contextIsolation: true,
        }
    });

    //win.loadURL('https://www.ecosia.org');
    win.loadFile('index.html');
    win.menuBarVisible = false;

    win.toggleDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})