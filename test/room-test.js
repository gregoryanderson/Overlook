import Room from '../src/Room'
import data from '../data'
import chai from 'chai';
import spies from 'chai-spies'
const expect = chai.expect;

  describe("Room", function() {

    let room

    beforeEach(function (){
        room = new Room(data, data, data,'2019/08/29')
    });

    it.only('should return true', function() {
      expect(true).to.equal(true);
    });

    it.only('should be an function', function(){
      expect(Room).to.be.a('function')
    })

    it.only('should be an instance of Room', function(){
      expect(room).to.be.an.instanceOf(Room)
    })
  });