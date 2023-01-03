// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  getMessages: function() {
    return Object.values(Messages._data);
  },

  updateMessages: function(messages, callback = () => {}) {
    for (let i = 0; i < messages.length; i++) {
      let newMessage = {
        username: messages[i].username || '',
        createdAt: messages[i].created_at,
        updatedAt: messages[i].updated_at || '',
        text: messages[i].text || '',
        roomname: messages[i].roomname || '',
        github: messages[i].github_handle,
      };

      Messages._data[i] = newMessage;
    }


    MessagesView.render();
  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};