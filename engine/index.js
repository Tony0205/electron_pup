const Melon = require('./melon/melon_ticket');

module.exports = class EngineList {
  constructor(payload) {
      this.payload = payload;
  }
  // 엔진 별로 분기하여 실행.
  start() {
    let payload = this.payload;

    switch (payload.vendor) {
      case "melon":
        let melon = new Melon(payload);
        melon.reservationTicket();
        break;
      
      case "yes24":
        
        break;
      
      case "interpark":
        
        break;
    
      default:
        break;
    }
  }
}