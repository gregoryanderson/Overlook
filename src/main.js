import domUpdates from "./domUpdates";

class Main {
  constructor(customers, bookings, services, rooms, date) {
    this.customers = customers.users;
    this.bookings = bookings.bookings;
    this.services = services.roomServices;
    this.rooms = rooms.rooms;
    this.date = date;
    this.info = this.updateToDom(date);
  }

  roomsAvailable(specDate) {
    return this.bookings.reduce((roomsAvailable, room) => {
      if (specDate === room.date) {
        roomsAvailable.push(room);
      }
      return roomsAvailable;
    }, []).length;
  }

  moneyFromServicesToday(specDate) {
    return this.services.reduce((totalCharges, charge) => {
      if (specDate === charge.date) {
        totalCharges += charge.totalCost;
      }
      return totalCharges;
    }, 0);
  }

  moneyFromRevenueToday(specDate) {
    let todaysBookings = this.findTodaysBookings(specDate);
    let costForRoom = todaysBookings.map(room => {
      return {
        roomNum: room.roomNumber,
        roomCost: this.rooms.find(item => item.number === room.roomNumber)
          .costPerNight
      };
    });

    let money = costForRoom.reduce((totalMoney, room) => {
      totalMoney += room.roomCost;
      return totalMoney;
    }, 0);

    return money;
  }

  findTodaysBookings(specDate) {
    return this.bookings.filter(booking => booking.date === specDate);
  }

  percentageOfRoomsBooked(specDate) {
    let todaysBookings = this.findTodaysBookings(specDate);
    return (todaysBookings.length / this.rooms.length) * 100;
  }

  makeRoomCostArray() {
    return this.bookings.reduce((dates, booking) => {
      if (!dates[booking.date]) {
        dates[booking.date] = 1;
      } else {
        dates[booking.date]++;
      }
      return dates;
    }, {});
  }

  bookingsSingleDayHigh() {
    let roomCostAndDateArray = this.makeRoomCostArray();
    return Math.max(...Object.values(roomCostAndDateArray));
  }

  bookingsSingleDayHighDate() {
    let roomCostAndDateArray = this.makeRoomCostArray();
    let maxNumberOfRooms = this.bookingsSingleDayHigh();
    return Object.keys(roomCostAndDateArray).find(
      date => roomCostAndDateArray[date] === maxNumberOfRooms
    );
  }

  bookingsSingleDayLow() {
    let roomCostAndDateArray = this.makeRoomCostArray();
    return Math.min(...Object.values(roomCostAndDateArray));
  }

  bookingsSingleDayLowDate() {
    let roomCostAndDateArray = this.makeRoomCostArray();
    let minNumberOfRooms = this.bookingsSingleDayLow();
    return Object.keys(roomCostAndDateArray).find(
      date => roomCostAndDateArray[date] === minNumberOfRooms
    );
  }

  updateToDom() {
    domUpdates.displayRoomsAvailable(this.roomsAvailable(this.date));
    domUpdates.displayTotalServiceChargesForToday(
      this.moneyFromServicesToday(this.date)
    );
    domUpdates.displayRoomChargesRevenueForToday(
      this.moneyFromRevenueToday(this.date)
    );
    domUpdates.displayPercentageOfRoomsBooked(
      this.percentageOfRoomsBooked(this.date)
    );
    domUpdates.displayMostRoomsBookedInOneDay(
      this.bookingsSingleDayHigh(),
      this.bookingsSingleDayHighDate()
    );
    domUpdates.displayLeastRoomsBookedInOneDay(
      this.bookingsSingleDayLow(),
      this.bookingsSingleDayLowDate()
    );
    domUpdates.displayDate(this.date);
  }
}

export default Main;

// rooms: [
//   {
//     number: 1,
//     roomType: "residential suite",
//     bidet: false,
//     bedSize: "twin",
//     numBeds: 1,
//     costPerNight: 265.03
//   },

// bookings: [
//   {
//     userID: 4,
//     date: "2019/10/19",
//     roomNumber: 5
//   },

// users: [
//   {
//     id: 1,
//     name: "Matilde Larson"
//   },

// roomServices: [
//   {
//     userID: 14,
//     date: "2019/07/29",
//     food: "Rustic Concrete Sandwich",
//     totalCost: 14.9
//   },
