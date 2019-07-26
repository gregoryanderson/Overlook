import domUpdates from "./domUpdates";

class Main {
    constructor (customers, bookings, services, rooms, date){
        this.customers = customers;
        this.bookings = bookings;
        this.services = services;
        this.rooms = rooms;
        this.date = date;
    }

    roomsAvailable(todaysDate){
        return this.bookings.filter(booking => {
            if(booking.date === todaysDate){
                return booking;
            }
        })
    }

    updateToDom(todaysDate){
        domUpdates.displayRoomsAvailable(this.roomsAvailable);
        domUpdates.displayDate(todaysDate)


    }

}

export default Main