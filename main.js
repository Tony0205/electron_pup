const { app, BrowserWindow, ipcMain } = require("electron");
const setMenu = require('./setAppMenu');
const engineList = require('./engine');

let win;
let page = null;

function createWindow() {
  setMenu.setAppMenu();
  win = new BrowserWindow({ width: 1000, height: 800 });
  win.loadURL(`file://${__dirname}/index.html`);
  win.on("closed", () => { win = null; });
  eventListener();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

// 시작 버튼을 누를 시에 작동되는 이벤트 리스너 세팅.
function eventListener() {
  ipcMain.on("REPLY_TEXT", (e, payload) => {
    startEngine(payload);
  });
}

// 엔진 종류에 따른 엔진 실행
function startEngine(payload) {
  let engine = new engineList(payload);
  engine.start();
}