const expect = chai.expect;

import Booking from '../src/Booking';
import chai from 'chai';
import spies from 'chai-spies';
import data from '../data';
import domUpdates from '../src/domUpdates';

chai.use(spies)

describe("Booking", function() {

  let booking 

  beforeEach(function (){
      booking = new Booking(data, 5,'2019/08/29')
  });

  it.only("should return true", function() {
      expect(true).to.equal(true);
  });

  it.only("should filter all bookings by a specific guest", function() {
    booking.filterAllBookingsBySpecificGuest({id: 4,name: "Brook Christiansen"})
    expect(domUpdates.displayAllBookingsBySpecificGuest).to.have.been.called(1);
  });

  it.only("should find todays booking for a specific guest", function() {
    booking.findTodaysBookingForSpecificGuest({id: 4,name: "Brook Christiansen"})
    expect(domUpdates.displayTodaysBookingForSpecificGuest).to.have.been.called(1);
  });
});

