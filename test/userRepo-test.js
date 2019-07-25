import RoomServiceRepo from '../src/RoomServiceRepo'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { roomServices } from '../data'
const expect = chai.expect;
chai.use(spies)


describe('See if the tests are running', function() {
    it('should return true', function() {
      expect(true).to.equal(true);
    });
  });