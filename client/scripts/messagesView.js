// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', (e) => {
      let username = e.currentTarget.textContent;
      Friends.toggleStatus(username);
    });

  },

  render: function() {
    // TODO: Render _all_ the messages.
    // need to fix as it's rendering over and over on top
    MessagesView.$chats.html('');
    let messages = !Rooms.currentRoom ? Messages.getMessages() : Messages.getMessages().filter((message) => message.roomname === Rooms.currentRoom);

    console.log(messages);

    for (let key in messages) {
      MessagesView.renderMessage(messages[key]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    let $tweet = MessageView.render(message);
    MessagesView.$chats.prepend($tweet);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};