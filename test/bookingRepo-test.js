import BookingRepo from '../src/BookingsRepo'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { bookings, rooms } from '../data'
const expect = chai.expect;


describe('See if the tests are running', function() {
    it('should return true', function() {
      expect(true).to.equal(true);
    });
  });