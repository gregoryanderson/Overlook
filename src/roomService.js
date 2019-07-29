import domUpdates from "./domUpdates";
import GuestRepo from "./guestRepo";

class RoomService {
  constructor(services, menu, guestId) {
    this.services = services.roomServices;
    this.menu = this.createMenu();
    this.id = guestId;
    console.log(this.services)
    // this.info = this.updateToDom();
  }

  createMenu(){
    let fullMenu = [];
      return this.services.reduce((fullMenuObjs, order) => {
        if(!fullMenu.includes(order.food)){
          fullMenu.push(order.food)
          fullMenuObjs.push({food: order.food, cost: order.totalCost})
        }
        return fullMenuObjs
      }, [])
  }

  findCorrectItem(foodId){
    return this.services.find(item => item.totalCost == foodId)
  }

  filterOrdersByDate(specDate) {
    return this.data.filter(order => order.date === specDate);
  }

  filterAllOrdersBySpecificGuest(guest){
    let specificOrders = this.services.filter(service => {
      if (parseInt(guest.id) === service.userID){
        return service
      }
    })
    domUpdates.displayAllOrdersBySpecificGuest(specificOrders)
  }

  findTotalCostOfAllOrdersBySpecificGuest(guest){
    let specificOrdersCost = this.services.filter(order => {
      if(parseInt(guest.id) === order.userID){
        return order
      }
    }).reduce((totalCost, order) => {
      console.log(order)
      totalCost += order.totalCost
      return totalCost
    }, 0)
    domUpdates.displayTotalRoomServiceCostForSpecificUser(specificOrdersCost)
  }
//   updateToDom() {
//     domUpdates.displayRoomServiceOrdersForToday(
//       this.filterOrdersByDate(this.date)
//     );
//   }
}

export default RoomService;