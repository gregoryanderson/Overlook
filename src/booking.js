import domUpdates from "./domUpdates";

class Booking {
    constructor (bookings, guestId){
        this.bookings = bookings;
        console.log(this.bookings)
        this.id = guestId;
        console.log(this.id)
    }
}

export default Booking