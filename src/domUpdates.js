import $ from 'jquery';

const domUpdates = {
    
    displayDate(){

    },

    displayRoomsAvailable(rooms){
        $('#main__avail-rooms').html(`<h3>There are ${rooms} available.</h3>`)
    },

    displayTotalServiceChargesForToday(charges){
        $('#main__charges-today').html(`<h3>${charges} has been made in room service charges today.</h3>`)
    },

    displayRoomChargesRevenueForToday(charges){
        $('#main__revenue-today').html(`<h3>${charges} has been made in room booking revenue today.</h3>`)
    },

    displayPercentageOfRoomsBooked(percent){
        $('#main__occupied-rate').html(`<h3>${percent}% of rooms have been booked today.</h3>`)
    },
    
    displayMostRoomsBookedInOneDay(totalRoomNumber, date){
        $('#rooms__booking-high-date').html(`<h3>On ${date}, we booked ${totalRoomNumber} rooms, which was the highest booking date for our hotel. Great work!</h3>`)
    },

    displayLeastRoomsBookedInOneDay(totalRoomNumber, date){
        $('#rooms__booking-low-date').html(`<h3>On ${date}, we booked ${totalRoomNumber} rooms, which was the lowest booking date for our hotel. :(</h3>`)
    },
}


export default domUpdates