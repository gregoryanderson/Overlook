import domUpdates from "./domUpdates";

class GuestRepo {
    constructor (userData){
        this.data = userData.users;
        this.info = this.updateToDom()
    }

    filterUsersBySearch(guestSearchInput){
        let lowerCaseSearch = guestSearchInput.toLowerCase()
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