const expect = chai.expect;

import Customer from '../src/Customer'
import chai from 'chai';
import data from '../data'

describe("customer", function() {

  let customer 

  beforeEach(function (){
      customer = new Customer(data, 4, "Brook Christiansen")
  });

  it.only("should return true", function() {
      expect(true).to.equal(true);
  })

  it.only("should return correct name", function() {
    expect(customer.findNameOfGuest()).to.equal("Brook Christiansen");
  })

  it.only("should return correct id", function() {
    expect(customer.findIdOfGuest()).to.equal(21);
  })

})