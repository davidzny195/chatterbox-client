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

  template: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `),

  friendsTemplate: _.template(`
  <div class="chat">
    <div class="username"><%- username %></div>
    <b style="color: red"><%- text %></b>
  </div>
`),

  render: function() {
    // TODO: Render _all_ the messages.
    // need to fix as it's rendering over and over on top
    MessagesView.$chats.html('');
    let messages = !Rooms.currentRoom ? Messages.getMessages() : Messages.getMessages().filter((message) => message.roomname === Rooms.currentRoom);

    for (let key in messages) {
      MessagesView.renderMessage(messages[key]);
    }
  },



  renderMessage: function(message) {
    // TODO: Render a single message.


    let $tweet = Array.from(Friends.list).includes(message.username) ? MessagesView.friendsTemplate(message) : MessagesView.template(message);
    MessagesView.$chats.prepend($tweet);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};