const expect = chai.expect;

import RoomServiceRepo from '../src/RoomServiceRepo'
import chai from 'chai';
import data from '../data'


describe("roomServiceRepo", function() {

  let roomServiceRepo 

  beforeEach(function(){
      roomServiceRepo = new RoomServiceRepo(data, data, '2019/08/29')
  });

  it.only("should return true", function() {
      expect(true).to.equal(true);
  });

  it.only("should filter order by date", function() {
    expect(roomServiceRepo.filterOrdersByDate('2019/08/29')).to.be.an('array');
    expect(roomServiceRepo.filterOrdersByDate('2019/08/29')).to.have.length(1);
  });
});

