import $ from "jquery";
import "./css/base.scss";
// import domUpdates from './domUpdates';

import Main from "../src/main";
import GuestRepo from "./guestRepo";
import Customer from './Customer'; 
import Room from "../src/Room";
import RoomServiceRepo from "./RoomServiceRepo";
import RoomService from '../src/RoomService';
import BookingRepo from "./BookingRepo";
import Booking from './Booking'
// import domUpdates from './domUpdates';
// import data from './data'

// import Admin from './Admin';

let customers = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users"
).then(function(response) {
  return response.json();
});

let services = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices"
).then(function(response) {
  return response.json();
});

let bookings = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings"
).then(function(response) {
  return response.json();
});

let rooms = fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms"
).then(function(response) {
  return response.json();
});

let allData = { customers: {}, roomServices: {}, bookings: {}, rooms: {} };

Promise.all([customers, services, bookings, rooms])
  .then(function(values) {
    allData["customers"] = values[0];
    allData["services"] = values[1];
    allData["bookings"] = values[2];
    allData["rooms"] = values[3];
    return allData;
  })
  .catch(error => console.log(`Error in promises ${error}`));

$(document).ready(function() {
  let userRepo;
  let main;
  let orderRepo;
  let bookingRepo;
  let user;
  let roomService;
  let guestBooking;
  let guestRepo;
  let customer;

  const dateToday = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    let thisDay = yyyy + "/" + mm + "/" + dd;
    return thisDay;
  };

  setTimeout(() => {
    main = new Main(
      allData.customers,
      allData.bookings,
      allData.services,
      allData.rooms,
      dateToday()
    );
    orderRepo = new RoomServiceRepo(allData.services, dateToday());
    bookingRepo = new BookingRepo(
      allData.bookings,
      allData.rooms,
      allData.customers,
      dateToday()
    );
    guestRepo = new GuestRepo(
      allData.customers
      );
  }, 1000);

  $("#guests__input--search").on("input", function() {
    let guestSearchInput = $("#guests__input--search").val();
    console.log(guestSearchInput);
    if (guestSearchInput.length > 0) {
      guestRepo.filterUsersBySearch(guestSearchInput);
      $('.guests__td--searched').on('click', function(){
        let guestId = $(this).attr('data-id');
        customer = new Customer(allData.customers, guestId, undefined);
        roomService = new RoomService(allData.services, allData.menu, guestId);
        guestBooking = new Booking(allData.bookings, guestId);
      })
    }
  });

  // $('#tab__customers-search').on('input', function () {
  //   let typed = $('#tab__customers-search').val()
  //   if (typed.length > 1) {
  //     userRepo.showUsers(typed)
  //     $('.tab__customers-output li').on('click', function () {
  //       let customerID = $(this).attr('data-id')
  //       let parsedID = parseInt(customerID)
  //       console.log(parsedID)
  //       user = new Customer(data.users, parsedID, undefined)
  //       roomService = new RoomService(data.services, data.menu, parsedID)
  //       customerBooking = new Booking(data.bookings, parsedID)
  //       customerBooking.findBookings()
  //       // roomService.updateInfo(todaysDate())
  //       domUpdates.displayMenu(data.menu)
  //       $('#room__service-menu button').click(function () {
  //         let sammich = $(this).data('food')
  //         roomService.orderFood(todaysDate(), sammich)
  //         roomService.updateInfo(todaysDate())
  //       })
  //       $('#customer__booked-info').show()

  //       $('.cancel-booking').on('click', function () {
  //         console.log('clicked')
  //         let roomNum = $(this).data('room')
  //         let dateSelect = $(this).data('date')
  //         customerBooking.cancelBooking(roomNum, dateSelect, user.id)
  //         $(this).closest('tr').remove()
  //       })

  //     })
  //   } else {
  //     domUpdates.promptNewUser()
  //   }
  // })
});
