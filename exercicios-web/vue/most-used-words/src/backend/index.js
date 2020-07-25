const { ipcMain } = require('electron')

ipcMain.on('blabla', (event, arg) => {
    console.log(arg)

    event.reply('blabla', 'pong')
})
