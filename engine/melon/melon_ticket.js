const puppeteer = require('puppeteer');
const _ = require('lodash');

module.exports = class Melon {
  constructor(payload) {
      this.payload = payload;
  }

  async reservationTicket() {
    let payload = this.payload;
    console.log(payload);
    
    // puppeteer launch start!
    // let browser = await puppeteer.launch({headless: false})//({args: ['--no-sandbox', '--disable-setuid-sandbox']}) // 브라우저 인스턴스를 만들고
    // let page = await browser.newPage() // 페이지를 연다

    // await page.goto('https://nid.naver.com/nidlogin.login'); // 비트맥스 사이트 진입
    
    // await page.type("#id", payload.account.user_id);
    // await page.type("#pw", payload.account.user_pwd);
    
    // await page.click("#frmNIDLogin > fieldset > input");
    // await page.waitForSelector("#frmNIDLogin > fieldset > span.btn_cancel > a");
    // await page.click("#frmNIDLogin > fieldset > span.btn_cancel > a");
  }
}