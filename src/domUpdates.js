import $ from "jquery";

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
    console.log(todaysRoomsAvailable);
    if (todaysRoomsAvailable.length === 0) {
      "#rooms__tbody--available".text("There are no rooms available today");
    } else {
      todaysRoomsAvailable.forEach(room => {
        $("#rooms__tbody--available").append(`<tr>
                <td>${room.number}</td><td>${room.bedSize}</td><td>${
          room.numBeds
        }</td><td>${room.bidet}</td><td>${room.costPerNight}</td>
                </tr>`);
      });
    }
  },

  displayAllGuests(allGuests) {
    console.log(allGuests);
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

  displaySearchedUsers(filteredSearchGuests){
    console.log(filteredSearchGuests)
    $('#guests__tbody--searched').text('');
    filteredSearchGuests.forEach(guest => {
        $('#guests__tbody--searched').append(`<tr><td class="guests__td--searched" data-id=${guest.id}>${guest.name}</td><td>${guest.id}</td><td><input type="checkbox"></input></td></tr>`)
    })
  },

  displaySelectedGuest(selectedGuest){
    console.log(selectedGuest)
    $('#header--selected-guest').text(selectedGuest.name)
  }

//   searchCustomers(users) {
//     $('#no-users').text('')
//     $('.tab__customers-output').text('')
//     users.forEach(user => {
//       $('.tab__customers-output').append(`<li class="customer__search-data" data-id="${user.id}">${user.name}</li>`)
//     })
//   },
};

export default domUpdates;
