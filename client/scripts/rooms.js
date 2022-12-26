// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  list: new Set(),
  currentRoom: '',

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  getRooms: function() {
    return Rooms.list;
  },

  add: function(room) {
    Rooms.list.add(room);
    Rooms.setRoom(room);
    RoomsView.render();
  },

  setRoom: function(room) {
    Rooms.currentRoom = room;
    MessagesView.render();
  }
};