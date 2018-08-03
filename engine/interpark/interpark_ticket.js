const puppeteer = require('puppeteer');
const _ = require('lodash');

module.exports = class Interpark {
  constructor(payload) {
      this.payload = payload;
  }

  async reservationTicket() {
    let payload = this.payload;
    console.log(payload);
    //해당 정보가지고 엔진 개발 시작
  }
}