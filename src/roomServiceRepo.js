import domUpdates from "./domUpdates";

class RoomServiceRepo {
  constructor(data, date) {
    this.data = data.roomServices;
    this.date = date;
    this.info = this.updateToDom();
  }

  filterOrdersByDate(specDate) {
    return this.data.filter(order => order.date === specDate);
  }

  updateToDom() {
    domUpdates.displayRoomServiceOrdersForToday(
      this.filterOrdersByDate(this.date)
    );
  }
}

export default RoomServiceRepo;
