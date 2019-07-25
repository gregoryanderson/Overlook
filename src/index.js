import $ from 'jquery';
import './css/base.scss';
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');


$(document).ready(function () {
    let userRepo;
    let main; 
    let orderRepo;
    let bookingRepo;
    let user;
    let roomService;
    let customerBooking;


    const todaysDate = () => {
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
    
        let thisDay = dd + '/' + mm + '/' + yyyy;
        return thisDay;
      }
    });