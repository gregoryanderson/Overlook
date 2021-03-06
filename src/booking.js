import domUpdates from "./domUpdates";

class Booking {
  constructor(bookings, guestId, date) {
    this.bookings = bookings.bookings;
    this.id = guestId;
    this.date = date;
  }

  filterAllBookingsBySpecificGuest(guest) {
    let specificBookings = this.bookings.filter(booking => {
      if (parseInt(guest.id) === booking.userID) {
        return booking;
      }
    }).sort((a,b)=> a.date-b.date)
    domUpdates.displayAllBookingsBySpecificGuest(specificBookings);
  }

  findTodaysBookingForSpecificGuest(guest) {
    let todaysBooking = this.bookings
      .filter(booking => {
        if (parseInt(guest.id) === booking.userID) {
          return booking;
        }
      }).find(booking => {
        if (booking.date == this.date) {
          return booking;
        }
      });
    domUpdates.displayTodaysBookingForSpecificGuest(guest, todaysBooking)
  }
}

export default Booking;
