import domUpdates from "./domUpdates";

class RoomService {
  constructor(services, menu, guestId) {
    this.services = services;
    console.log(this.services)
    this.menu = menu;
    console.log(this.menu)
    this.id = guestId;
    // this.info = this.updateToDom();
  }

  filterOrdersByDate(specDate) {
    return this.data.filter(order => order.date === specDate);
  }

//   updateToDom() {
//     domUpdates.displayRoomServiceOrdersForToday(
//       this.filterOrdersByDate(this.date)
//     );
//   }
}

export default RoomService;