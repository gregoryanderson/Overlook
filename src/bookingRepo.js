import domUpdates from "./domUpdates";

class BookingRepo {
  constructor(bookings, rooms, customers, date) {
    this.bookings = bookings.bookings;
    this.rooms = rooms.rooms;
    this.customers = customers.users;
    this.date = date;
    this.info = this.updateToDom();
  }

  filterBookingsByDate(specDate) {
    return this.bookings.filter(booking => booking.date === specDate);
  }

  sortBookingsByDate(specDate) {
    let todaysBookings = this.filterBookingsByDate(specDate);
    return todaysBookings.sort((a, b) => a.roomNumber - b.roomNumber);
  }

  mapBookingsForRoomNumber(bookings){
    return bookings.map(booking => booking.roomNumber)
  }

  filterRoomsAvailableToday(specDate){
      let todaysBookings = this.sortBookingsByDate(specDate)
      let bookedRoomNumbers = (this.mapBookingsForRoomNumber(todaysBookings))
      return this.rooms.filter(room => {
          if(!bookedRoomNumbers.includes(room.number)){
            return room
          }
      })
  }

  pushBookingIntoBookingsArray(booking, bookedRoom){
    this.bookings.push(booking)
  }

  findCorrectRoom(room){
    return this.rooms.find(item => item.number == room);
  }

  updateToDom() {
    domUpdates.displayBookingsForToday(this.sortBookingsByDate(this.date));
    domUpdates.displayRoomsAvailableForToday(this.filterRoomsAvailableToday(this.date));
  }
}

export default BookingRepo;
