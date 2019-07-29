import $ from "jquery";
import RoomService from "./RoomService";

const domUpdates = {
  displayDate() {},

  displayRoomsAvailable(rooms) {
    $("#main__avail-rooms").html(`<h3>There are ${rooms} available.</h3>`);
  },

  displayTotalServiceChargesForToday(charges) {
    $("#main__charges-today").html(
      `<h3>${charges} has been made in room service charges today.</h3>`
    );
  },

  displayRoomChargesRevenueForToday(charges) {
    $("#main__revenue-today").html(
      `<h3>${charges} has been made in room booking revenue today.</h3>`
    );
  },

  displayPercentageOfRoomsBooked(percent) {
    $("#main__occupied-rate").html(
      `<h3>${percent}% of rooms have been booked today.</h3>`
    );
  },

  displayMostRoomsBookedInOneDay(totalRoomNumber, date) {
    $("#rooms__booking-high-date").html(
      `<h3>On ${date}, we booked ${totalRoomNumber} rooms, which was the highest booking date for our hotel. Great work!</h3>`
    );
  },

  displayLeastRoomsBookedInOneDay(totalRoomNumber, date) {
    $("#rooms__booking-low-date").html(
      `<h3>On ${date}, we booked ${totalRoomNumber} rooms, which was the lowest booking date for our hotel. :(</h3>`
    );
  },

  displayRoomServiceOrdersForToday(todaysOrders) {
    if (todaysOrders.length === 0) {
      $("#orders__tbody--today").text("There are no orders today");
    } else {
      todaysOrders.forEach(order => {
        $("#orders__tbody--today").text("");
        $("#orders__tbody--today").append(`<tr>
        <td>${order.food}</td><td>$${order.totalCost}</td>
            </tr>`);
      });
    }
  },

  displayRoomServiceOrdersForSpecificDate(specificDateOrders) {
    if (specificDateOrders.length === 0) {
      $("#orders__tbody--today").text("There are no orders for that date");
    } else {
      specificDateOrders.forEach(order => {
        $("#orders__tbody--searched").text("");
        $("#orders__tbody--searched").append(`<tr>
            <td>${order.food}</td><td>$${order.totalCost}</td><td>${
          order.date
        }</td>
            </tr>`);
      });
    }
  },

  displayBookingsForToday(todaysBookings) {
    if (todaysBookings.length === 0) {
      $("#room__tbody--booked").text("There are no bookings today");
    } else {
      todaysBookings.forEach(booking => {
        $("#room__tbody--booked").append(`<tr>
            <td>${booking.roomNumber}</td><td>${booking.date}</td>
            </tr>`);
      });
    }
  },

  displayRoomsAvailableForToday(todaysRoomsAvailable) {
    if (todaysRoomsAvailable.length === 0) {
      "#rooms__tbody--available".text("There are no rooms available today");
    } else {
      todaysRoomsAvailable.forEach(room => {
        $("#rooms__tbody--available").append(`<tr>
                <td>${room.number}</td><td>${room.roomType}</td><td>${room.bedSize}</td><td>${
          room.numBeds
        }</td><td>${room.bidet}</td><td>${room.costPerNight}</td>
                </tr>`);
      });
    }
  },

  displayAllGuests(allGuests) {
    if (allGuests.length === 0) {
      "#guests__tbody".text("Please search and select a guest");
    } else {
      allGuests.forEach(guest => {
        $("#guests__tbody").append(`<tr>
              <td>${guest.name}</td><td>${guest.id}</td>
              </tr>`);
      });
    }
  },

  displaySearchedUsers(filteredSearchGuests) {
    if (filteredSearchGuests.length > 0){
      $("#guests__tbody--searched").text("");
      filteredSearchGuests.forEach(guest => {
        $("#guests__tbody--searched").append(
          `<tr><td class="guests__td--searched" data-id=${guest.id}>${
            guest.name
          }</td><td>${guest.id}</td></tr>`
        );
      });
    } else {
      newGuestReminder()
    }
  },

  displaySelectedGuest(selectedGuest) {
    $("#header--selected-guest").text(selectedGuest.name);
    $('#guests__tbody--searched').text('');
    $('#guests__section--new-guest').text('');
  },

  newGuestReminder() {
    $("#guests__section--new-guest").html(
      '<p>Or, Please Enter a Name to Create a New Guest.</p><input type="text" id="guests__input--create"><button id="guests__button--create">Create</button>'
    );
    $("#guests__tbody--searched").text("");
  },

  displayAllOrdersBySpecificGuest(orders) {
    $("#orders__tbody--guest").text('')
    if (orders.length === 0) {
      $("#orders__section--new-order").html(
        '<p>No Orders Found.</p><button id="orders__button--create">Create</button>'
      );
    } else {
      orders.forEach(order => {
        $("#orders__tbody--guest").append(`<tr>
    <td>${order.food}</td><td>$${order.totalCost}</td><td>${order.date}</td>
    </tr>`);
      });
    }
  },

  displayAllBookingsBySpecificGuest(bookings) {
    $("#rooms__tbody--guest").text('')
    if (bookings.length === 0) {
      $("#rooms__section--new-order").html(
        '<p>No Bookings Found.</p><button id="orders__button--create">Create</button>'
      );
    } else {
      bookings.forEach(booking => {
        $("#rooms__tbody--guest").append(`<tr>
    <td>${booking.date}</td><td>${booking.roomNumber}</td>
    </tr>`);
      });
    }
  }, 

  displayTotalRoomServiceCostForSpecificUser(ordersCost){
    if(ordersCost > 0){
    $("#orders__section--total").text(`Total: ${ordersCost}`)
    } else {
    $("#orders__section--total").text(`Total: $0.00`)
    }
  },

  displayTodaysBookingForSpecificGuest(guest, booking){
    if(booking){
      console.log(booking)
    $('#rooms__section--create-booking').text('')
    $('#rooms__tbody--todays-booking').html(`<tr><td>${guest.name}</td><td>${booking.roomNumber}</td></tr>`)
    } else {
    $("#rooms__section--create-booking").html(`<tr><td>${guest.name} has not made a reservation today. Click to create one</td><td><button id="rooms__button--reservation">Create Reservation</button></td></tr>`)
    // bookingRepo.filterRoomsAvailableToday()    
    }
  }, 

  displayTodaysBookingForSpecificGuestBookingToday(guest, booking, menu){
    $('#rooms__section--create-booking').text('')
    $('#rooms__tbody--todays-booking').html(`<tr><td>${guest.name}</td><td>${booking.number}</td></tr>`);
    $('#rooms__section--new-order').html(`<p>Would the guest enjoy room service?</p><button>Order</button>`);
    menu.forEach(item => {
    $('#rooms__tbody--todays-orders').append(`<tr><td>${item.food}</td><td>${item.cost}</td><td><button class="rooms__button--service" data-id=${item.cost}>Select</button></td></tr>`)
    })
  }, 

  displayRoomsAvailableForSpecificGuest(todaysRoomsAvailable) {
    if (todaysRoomsAvailable.length === 0) {
      $("#rooms__tbody--todays-booking").text("There are no rooms available today");
    } else {
      todaysRoomsAvailable.forEach(room => {
        $("#rooms__tbody--todays-booking").append(`<tr>
                <td>${room.number}</td><td>${room.roomType}</td><td>${room.bedSize}</td><td>${
          room.numBeds
        }</td><td>${room.bidet}</td><td>${room.costPerNight}</td><td><button class="guests__button--select" data-id=${room.number}>Select Room</button></td>
                </tr>`);
      });
    }
  },

  displayAdditionalFoodService(foodItem){
    $('#rooms__section--new-order').hide()
    $('#rooms__section--new-orders').hide()
    $('#orders__tbody--guest').html(`<tr>
      <td>${foodItem.food}</td><td>${foodItem.totalCost}</td></tr>`)
  }

};
    // displayTotalBookingsCostForSpecificUser(bookingsCost){
    //   console.log(bookingsCost)
    //   if(bookingsCost > 0){
    //     $("#rooms__section--total").text(`Total: ${bookingsCost}`)
    //   } else {
    //     $("#rooms__section--total").text(`Total: $0.00`)    
    //   }
    // }
    // // configureDate(date) {
  
    // },

// attachCreateButtonListener(){
//   $("#guests__button--create").on("click", function() {
//     console.log("linked");
//     let customerName = $("guests__input--create").val();
//     console.log(customerName);
//     let newCustomer = new Customer(allData.customers, null, customerName);
//     console.log(newCustomer);
//     let newMain = new Main(
//       allData.customers,
//       allData.bookings,
//       allData.services,
//       allData.rooms,
//       dateToday(),
//       newCustomer
//     );
//     console.log(newMain);
//     domUpdates.displaySelectedGuest(customerName);
//   });

//   searchCustomers(users) {
//     $('#no-users').text('')
//     $('.tab__customers-output').text('')
//     users.forEach(user => {
//       $('.tab__customers-output').append(`<li class="customer__search-data" data-id="${user.id}">${user.name}</li>`)
//     })
//   },

export default domUpdates;
