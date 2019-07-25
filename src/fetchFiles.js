const data = {};
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
  .then(response => response.json())
  .then(remote => (data.users = remote.users))
  .catch(err => console.error(err));

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
  .then(response => response.json())
  .then(remote => (data.rooms = remote.rooms))
  .catch(err => console.error(err));

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings")
  .then(response => response.json())
  .then(remote => (data.bookings = remote.bookings))
  .catch(err => console.error(err));

fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices")
  .then(response => response.json())
  .then(remote => (data.services = remote.roomServices))
  .catch(err => console.error(err));

export default data;
