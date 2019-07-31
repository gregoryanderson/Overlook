import domUpdates from "./domUpdates";

class Customer {
    constructor (guests, id, name){
        this.guests = guests.users;
        this.id = id || this.findIdOfGuest();
        this.name = name || this.findNameOfGuest();
    }

    findNameOfGuest(){
        let selectedGuest = this.guests.find(guest => guest.id == this.id);
        return selectedGuest.name
    }

    findIdOfGuest(){
        return this.guests.length + 1
    }

    pushGuestIntoGuestArray(guest){
        this.guests.push(guest)
    }

    // createNewCustomer(name) {
    //     let newCustomer = new Customer(name, null, this.users, this.rooms, this.bookings, this.roomServices);
    //     this.users.push(newbieCustomer);
    //     this.currentCustomer = newbieCustomer;
    //     this.hotelBenchmarks = new Hotel(this.users, this.rooms, this.bookings, this.roomServices, this.today);
    //     return newbieCustomer;
    //   }
}

export default Customer