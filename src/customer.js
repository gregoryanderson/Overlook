import domUpdates from "./domUpdates";

class Customer {
    constructor (guests, id, name){
        this.guests = guests.users;
        this.id = id;
        this.name = name || this.findNameOfGuest();
    }

    findNameOfGuest(){
        console.log(this.id)
        let selectedGuest = this.guests.find(guest => guest.id == this.id);
        console.log(selectedGuest)
        domUpdates.displaySelectedGuest(selectedGuest)
        return selectedGuest
    }
}

export default Customer