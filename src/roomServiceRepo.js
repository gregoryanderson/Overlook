import domUpdates from "./domUpdates";

class RoomServiceRepo {
  constructor(guests, services, date) {
    this.guests = guests.users
    this.services = services.roomServices;
    this.date = date;
    this.info = this.updateToDom();
  }

  filterOrdersByDate(specDate) {
    return this.services.filter(order => order.date == specDate);
  }

  updateToDom() {
    domUpdates.displayRoomServiceOrdersForToday(
      this.filterOrdersByDate(this.date)
    )
  }
}

export default RoomServiceRepo;
