const expect = chai.expect;

import GuestRepo from '../src/guestRepo'
import chai from 'chai';
import spies from 'chai-spies';
import data from '../data';
import domUpdates from '../src/domUpdates';

chai.use(spies)

describe("guestRepo", function() {

  let guestRepo 

  beforeEach(function (){
      guestRepo = new GuestRepo(data)
  });

  it.only("should return true", function() {
      expect(true).to.equal(true);
  });

  it.only('should filter users by search', function() {
    guestRepo.filterUsersBySearch('a')
    expect(domUpdates.displaySearchedUsers).to.be.called(1)
  })

  it.only('should update to dom', function() {
    expect(domUpdates.displayAllGuests).to.be.called(3)
  })
})