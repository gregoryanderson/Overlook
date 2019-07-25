import RoomServiceRepo from '../src/roomServiceRepo'
import { roomServices, menu } from '../data'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;


describe('See if the tests are running', function() {
    it('should return true', function() {
      expect(true).to.equal(true);
    });
  });