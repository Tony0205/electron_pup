const { app, BrowserWindow, ipcMain } = require("electron");
const puppeteer = require('puppeteer');
const _ = require('lodash');
const setMenu = require('./setAppMenu');

let win;
let page = null;

function createWindow() {
  setMenu.setAppMenu();
  win = new BrowserWindow({ width: 1200, height: 800 });
  win.loadURL(`file://${__dirname}/index.html`);
  win.on("closed", () => { win = null; });
  ipcMain.on("REPLY_TEXT", (e, login_info) => {
    executeLogin(login_info);
  });
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


// 로그인 실행함수
async function executeLogin(login_info) {
  // console.log(login_info);
  // puppeteer launch
  let browser = await puppeteer.launch({headless: false})//({args: ['--no-sandbox', '--disable-setuid-sandbox']}) // 브라우저 인스턴스를 만들고
  page = await browser.newPage() // 페이지를 연다

  await page.goto('https://nid.naver.com/nidlogin.login'); // 비트맥스 사이트 진입
  
  await page.type("#id", login_info.user_id);
  await page.type("#pw", login_info.user_pwd);
  
  await page.click("#frmNIDLogin > fieldset > input");
  await page.waitForSelector("#frmNIDLogin > fieldset > span.btn_cancel > a");
  await page.click("#frmNIDLogin > fieldset > span.btn_cancel > a");
}
