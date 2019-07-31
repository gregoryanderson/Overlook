import $ from "jquery";
import "./css/base.scss";

import Main from "../src/main";
import GuestRepo from "./guestRepo";
import Customer from "./Customer";
import Room from "../src/Room";
import RoomServiceRepo from "./RoomServiceRepo";
import RoomService from "../src/RoomService";
import BookingRepo from "./BookingRepo";
import Booking from "./Booking";
import domUpdates from "./domUpdates";

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
  let roomServiceRepo;

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
    guestRepo = new GuestRepo(allData.customers);
    orderRepo = new RoomServiceRepo(allData.customers, allData.services, dateToday());
    bookingRepo = new BookingRepo(
      allData.bookings,
      allData.rooms,
      allData.customers,
      dateToday()
    );
  }, 1000);

  $("#guests__input--search").on("input", function() {
    $('#guests__div--searched').show()
    $('#guests__table--searched').show()
    $('#orders__table--guest').show()
    $('#rooms__table--guest').show()
    let guestSearchInput = $("#guests__input--search").val();
    if (guestSearchInput.length > 0) {
      guestRepo.filterUsersBySearch(guestSearchInput);
      $(".guests__td--searched").on("click", function() {
        $('#guests__table--searched').hide()
        let guestId = $(this).attr("data-id");
        customer = new Customer(allData.customers, guestId, undefined);
        roomService = new RoomService(allData.services, guestId);
        guestBooking = new Booking(allData.bookings, guestId, dateToday());
        domUpdates.displaySelectedGuest(customer);
        roomService.filterAllOrdersBySpecificGuest(customer);
        roomService.findTotalCostOfAllOrdersBySpecificGuest(customer);
        guestBooking.filterAllBookingsBySpecificGuest(customer);
        guestBooking.findTodaysBookingForSpecificGuest(customer);
        $('#rooms__button--reservation').on('click', function(){
          $('#rooms__div--create-booking').show();
          let roomsAvailable = bookingRepo.filterRoomsAvailableToday(dateToday())
          domUpdates.displayRoomsAvailableForSpecificGuest(roomsAvailable);
          $('.guests__button--select').on('click', function() {
            $('#rooms__div--new-orders').show();
            let reservedRoomId = $(this).attr('data-id')
            let reservedRoom = bookingRepo.findCorrectRoom(reservedRoomId);
            bookingRepo.pushBookingIntoBookingsArray(guestBooking, reservedRoom, dateToday())
            let menu = roomService.createMenu()
            domUpdates.displayTodaysBookingForSpecificGuestBookingToday(customer, reservedRoom, menu);
            $('.rooms__button--service').on('click', function(){
              let foodItemId = $(this).attr('data-id')
              let foodItem = roomService.findCorrectItem(foodItemId)
              domUpdates.displayAdditionalFoodService(foodItem)
            })
          })
        })
      });
    } 
  });

  $('#guests__button--create').on('click', function () {
      $('#guests__div--searched').show()
      $('#guests__table--searched').show()
      $('#orders__table--guest').show()
      $('#rooms__table--guest').show()
      let customerName = $("#guests__input--create").val();
      let newCustomer = new Customer(allData.customers, null, customerName);
      newCustomer.pushGuestIntoGuestArray(newCustomer)
      let newMain = new Main(
        allData.customers,
        allData.bookings,
        allData.services,
        allData.rooms,
        dateToday(),
        newCustomer
      );
      let newRoomService = new RoomService(allData.services, newCustomer.id);
      let newGuestBooking = new Booking(allData.bookings, newCustomer.id, dateToday());
      domUpdates.displaySelectedGuest(newCustomer);
      newRoomService.filterAllOrdersBySpecificGuest(newCustomer);
      newRoomService.findTotalCostOfAllOrdersBySpecificGuest(newCustomer);
      newGuestBooking.findTodaysBookingForSpecificGuest(newCustomer);
      newGuestBooking.findTodaysBookingForSpecificGuest(newCustomer);
      $('#rooms__button--reservation').on('click', function(){
        $('#rooms__div--create-booking').show();
        let roomsAvailable = bookingRepo.filterRoomsAvailableToday(dateToday())
        domUpdates.displayRoomsAvailableForSpecificGuest(roomsAvailable);
        $('.guests__button--select').on('click', function() {
          $('#rooms__div--new-orders').show();
          let reservedRoomId = $(this).attr('data-id')
          let reservedRoom = bookingRepo.findCorrectRoom(reservedRoomId);
          console.log(reservedRoom)
          bookingRepo.pushBookingIntoBookingsArray(newGuestBooking, reservedRoom, dateToday())
          let menu = newRoomService.createMenu()
          domUpdates.displayTodaysBookingForSpecificGuestBookingToday(newCustomer, reservedRoom, menu);
          $('.rooms__button--service').on('click', function(){
            let foodItemId = $(this).attr('data-id')
            let foodItem = newRoomService.findCorrectItem(foodItemId)
            domUpdates.displayAdditionalFoodService(foodItem)
          })
        })
      });
  });

  $(window).on('click', function(){
    if(event.target.id === 'rooms__button--no-thanks'){
    $('#rooms__section--new-order').hide();
    $('#rooms__tbody--todays-orders').hide();
    $('#rooms__div--new-orders').hide()
    }
    if(event.target.id === 'unbook--newReservation'){
      let unbookId = $(this).attr('data-id')
      console.log(unbookId)
    }
  })

  $('#orders__btn--search').on('click', function(){
    $('#orders__table--searched').show()
    let specificDate = $('#orders__input--date').val();
    let configuredDate = configureDate(specificDate);
    let ordersOfDate = orderRepo.filterOrdersByDate(configuredDate);
    domUpdates.displayRoomServiceOrdersForSpecificDate(ordersOfDate);
  })
  
  $('.tab').on('click', function (){
    let tabSelector = $(this).data('tab');
    $('.active').removeClass('active')
    $(`#${tabSelector}`).addClass('active')
    $(this).addClass('active')
  })

  function configureDate(date){
    let dateArray = date.split('-');
    return dateArray[0] + '/' + dateArray[1] + '/' + dateArray[2];
  }
  
  $(window).on('load', function(){
    $('#guests__table--searched').hide();
    $('#rooms__div--create-booking').hide();
    $('#rooms__div--new-orders').hide();
    $('#orders__table--searched').hide()
    $('#orders__table--new').hide()
    $('#orders__table--guest').hide()
    $('#rooms__table--guest').hide()
  })
});
