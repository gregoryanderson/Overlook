import $ from 'jquery';
import './css/base.scss';
// import domUpdates from './domUpdates';

import Main from '../src/main';
// import UserRepo from '../src/UserRepo'
// import Customer from './Customer';
// import Room from '../src/Room';
// import RoomServiceRepo from './RoomServiceRepo';
// import RoomService from '../src/RoomService';
// import BookingRepo from './BookingsRepo';
// import Booking from './Booking'
// import domUpdates from './domUpdates';
// import data from './data'


// import Admin from './Admin';

let customers = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(function(response) {
  return response.json()
});

let services = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then(function(response) {
  return response.json()
});

let bookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(function(response) {
  return response.json()
});

let rooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(function(response) {
  return response.json()
});

let allData = {'customers': {}, 'roomServices': {}, 'bookings': {}, 'rooms': {}}

Promise.all([customers, services, bookings, rooms])
  .then(function(values) {
    allData['customers'] = values[0];
    allData['services'] = values[1];
    allData['bookings'] = values[2];
    allData['rooms'] = values[3];
    return allData;
  })
  .catch(error => console.log(`Error in promises ${error}`));

$(document).ready(function () {
    let userRepo;
    let main; 
    let orderRepo;
    let bookingRepo;
    let user;
    let roomService;
    let customerBooking;

    
    const dateToday = () => {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      let yyyy = today.getFullYear();
      
      if (dd < 10) {
        dd = '0' + dd
      }
      
      if (mm < 10) {
        mm = '0' + mm
      }
      
      let thisDay = yyyy + '/' + mm + '/' + dd;
      return thisDay;
    };


    setTimeout( () => {
      main = new Main(allData.customers, allData.bookings, allData.services, allData.rooms, dateToday())
    }, 1000);
  });