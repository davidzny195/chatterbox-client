// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.click(() => {
      let room = prompt('Room');
      Rooms.add(room);
    });

    RoomsView.$select.change((e) => {
      Rooms.currentRoom = e.target.value;
      MessagesView.render();
    });
  },

  template: _.template(`
  <option class="roomOption">
    <%- roomName %>
  </option>
  `),

  render: function() {
    RoomsView.$select.html('');
    // this is setting the selected room to null;

    let currentList = Rooms.getRooms();

    if (!currentList.size) {
      let roomNames = Messages.getMessages().map((message) => message.roomname);
      Rooms.list = new Set(roomNames);
      currentList = Rooms.list;
    }
    for (let room of currentList) {
      RoomsView.renderRoom(room);
    }
    if (Rooms.currentRoom) {
      RoomsView.$select.val(Rooms.currentRoom);
    }
  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    if (!roomName) {
      roomName = 'No Name';
    }

    let roomOption = RoomsView.template({ roomName });
    RoomsView.$select.append(roomOption);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
