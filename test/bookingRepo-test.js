const expect = chai.expect;

import BookingRepo from '../src/BookingRepo'
import chai from 'chai';
import spies from "chai-spies";
import data from '../data'
import domUpdates from '../src/domUpdates';
chai.use(spies)

describe("bookingRepo", function() {

  let bookingRepo 

  beforeEach(function (){
      bookingRepo = new BookingRepo(data, data, data,'2019/08/29')
  })

  it.only("should return true", function() {
    expect(true).to.equal(true);
  })

  it.only('should filter the rooms available today', function(){
    expect(bookingRepo.filterRoomsAvailableToday('2019/08/29')).to.be.an('array')
    expect(bookingRepo.filterRoomsAvailableToday('2019/08/29')).to.have.length(49)

  })

  it.only('should sort the rooms available today', function(){
    expect(bookingRepo.sortBookingsByDate('2019/08/29')).to.be.an('array')
    expect(bookingRepo.sortBookingsByDate('2019/08/29')).to.have.length(1)
  })

  it.only('should find a specific room', function(){
    expect(bookingRepo.findCorrectRoom(5)).to.be.an('object')
  })

  it.only('should update the dom', function(){
    bookingRepo.updateToDom()
    expect(domUpdates.displayBookingsForToday).to.have.been.called(6)
    expect(domUpdates.displayRoomsAvailableForToday).to.have.been.called(6)
  })
})