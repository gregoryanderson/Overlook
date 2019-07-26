import $ from 'jquery';

const domUpdates = {
    
    displayDate(){

    },

    displayRoomsAvailable(rooms){
        ('rooms', rooms)
        $('#main__avail-rooms').html(`<h3>There are ${rooms} available.</h3>`)
    }



}


export default domUpdates