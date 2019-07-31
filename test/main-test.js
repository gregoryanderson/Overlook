const expect = chai.expect;

import Main from "../src/main";
import chai from "chai";
import spies from "chai-spies";
import data from "../data";

import domUpdates from '../src/domUpdates';
chai.use(spies)
chai.spy.on(domUpdates, 'displayRoomsAvailable', () => {})
chai.spy.on(domUpdates, 'displayTotalServiceChargesForToday', () => {})
chai.spy.on(domUpdates, 'displayRoomChargesRevenueForToday', () => {})
chai.spy.on(domUpdates, 'displayPercentageOfRoomsBooked', () => {})
chai.spy.on(domUpdates, 'displayMostRoomsBookedInOneDay', () => {})
chai.spy.on(domUpdates, 'displayLeastRoomsBookedInOneDay', () => {})
chai.spy.on(domUpdates, 'displayRoomServiceOrdersForToday', () => {})
chai.spy.on(domUpdates, 'displayRoomServiceOrdersForSpecificDate', () => {})
chai.spy.on(domUpdates, 'displayBookingsForToday', () => {})
chai.spy.on(domUpdates, 'displayRoomsAvailableForToday', () => {})
chai.spy.on(domUpdates, 'displaySearchedUsers', () => {})
chai.spy.on(domUpdates, 'displaySelectedGuest', () => {})
chai.spy.on(domUpdates, 'newGuestReminder', () => {})
chai.spy.on(domUpdates, 'displayAllOrdersBySpecificGuest', () => {})
chai.spy.on(domUpdates, 'displayAllBookingsBySpecificGuest', () => {})
chai.spy.on(domUpdates, 'displayTotalRoomServiceCostForSpecificUser', () => {})
chai.spy.on(domUpdates, 'displayTodaysBookingForSpecificGuest', () => {})
chai.spy.on(domUpdates, 'displayTodaysBookingForSpecificGuestBookingToday', () => {})
chai.spy.on(domUpdates, 'displayRoomsAvailableForSpecificGuest', () => {})
chai.spy.on(domUpdates, 'displayAdditionalFoodService', () => {})
chai.spy.on(domUpdates, 'displayDate', () => {})
chai.spy.on(domUpdates, 'displayAllGuests', () => {})



describe("Main", function() {

    let main 

    beforeEach(function (){
        main = new Main(data, data, data, data,'2019/08/29')
    });

    it.only("should return true", function() {
        expect(true).to.equal(true);
    });

    it.only('should show how many rooms have been booked for a specific date', function(){
        expect(main.roomsAvailable('2019/08/29')).to.equal(1)
    })

    it.only('should show how many money was made on room service charges for a date', function(){
        expect(main.moneyFromServicesToday('2019/08/29')).to.equal(9.06)
    })

    it.only('should show how many money was made on room charges for a date', function(){
        expect(main.moneyFromRevenueToday('2019/08/29')).to.equal(301.62)
    })

    it.only('should show how the percentage of rooms booked on a date', function(){
        expect(main.percentageOfRoomsBooked('2019/08/29')).to.equal(2)
    })

    it.only('should return an array of all costs', function(){
        expect(main.makeRoomCostArray()).to.be.an('object')
    })

    it.only('should show how many rooms are booked for the most booked day', function(){
        expect(main.bookingsSingleDayHigh()).to.equal(3)
    })

    it.only('should show how many rooms are booked for the worst booked day', function(){
        expect(main.bookingsSingleDayLow()).to.equal(1)
    })

    it.only('should show the date of the best booked day', function(){
        expect(main.bookingsSingleDayHighDate()).to.equal('2019/09/01')
    })

    it.only('should show the date of the worst booked day', function(){
        expect(main.bookingsSingleDayLowDate()).to.equal('2019/10/19')
    })

    it.only('should update to the dom', function(){
        expect(domUpdates.displayRoomsAvailable).to.have.been.called(11)
        expect(domUpdates.displayTotalServiceChargesForToday).to.have.been.called(11)
        expect(domUpdates.displayRoomChargesRevenueForToday).to.have.been.called(11)
        expect(domUpdates.displayPercentageOfRoomsBooked).to.have.been.called(11)
        expect(domUpdates.displayMostRoomsBookedInOneDay).to.have.been.called(11)
        expect(domUpdates.displayLeastRoomsBookedInOneDay).to.have.been.called(11)
        expect(domUpdates.displayDate).to.have.been.called(11)
    }) 
});
