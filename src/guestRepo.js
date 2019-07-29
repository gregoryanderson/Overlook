import domUpdates from "./domUpdates";
import Customer from "./Customer";

class GuestRepo {
    constructor (userData){
        this.data = userData.users;
        this.info = this.updateToDom()
    }

    filterUsersBySearch(guestSearchInput){
        let lowerCaseSearch = guestSearchInput.toLowerCase()
        console.log(this.data)
        let filteredGuests = this.data.filter(guest => guest.name.toLowerCase().includes(lowerCaseSearch));
        if (filteredGuests.length > 0){
            domUpdates.displaySearchedUsers(filteredGuests)
            return filteredGuests;
        } else {
            domUpdates.newGuestReminder()
        }
    }
    
    updateToDom(){
        domUpdates.displayAllGuests(this.data)
    }
}

export default GuestRepo