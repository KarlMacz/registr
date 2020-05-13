const { app, BrowserWindow, dialog, Menu } = require('electron');

app.on('ready', () => {
  let win = new BrowserWindow({
    icon: `file://${__dirname}/dist/server/favicon.ico`,
    show: false
  });

  win.loadURL(`file://${__dirname}/dist/server/index.html`);
  win.maximize();

  Menu.setApplicationMenu(null);

  win.once('ready-to-show', () => {
    win.show();
  });

  win.on('close', (e) => {
    let choice = dialog.showMessageBoxSync(win, {
      type: 'question',
      buttons: ['Yes', 'No'],
      title: 'Confirm',
      message: 'Are you sure you want to quit?'
    });

    if(choice === 1) {
      e.preventDefault();
    }
  });

  win.on('closed', () => {
    win = null;
  });
});
