const expect = chai.expect;

import RoomService from "../src/roomService";
import chai from "chai";
import spies from "chai-spies";
import data from "../data";
import domUpdates from '../src/domUpdates';


chai.use(spies)


describe("roomService", function() {

  let roomService 

  beforeEach(function (){
      roomService = new RoomService(data, null, 5)
  });

  it.only("should return true", function() {
      expect(true).to.equal(true);
  })

  it.only('should create a menu', function(){
      expect(roomService.createMenu()).to.be.an('array')
      expect(roomService.createMenu()).to.have.length(47)
  })

  it.only('should find an item on the menu', function(){
    expect(roomService.findCorrectItem(14.9)).to.be.an('object')
  })

  it.only('should filter all orders by a specific guest', () => {
    roomService.filterAllOrdersBySpecificGuest({id: 4, name: "Brook Christiansen"})
    expect(domUpdates.displayAllOrdersBySpecificGuest).to.have.been.called(1)
  })

  it.only('should find the total cost of all orders by a specific guest', () => {
    roomService.findTotalCostOfAllOrdersBySpecificGuest({id: 4, name: "Brook Christiansen"})
    expect(domUpdates.displayTotalRoomServiceCostForSpecificUser).to.have.been.called(1)
  })
})
