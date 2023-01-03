// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  list: new Set(),

  toggleStatus: function(friend) {
    if (!Friends.list.has(friend)) {
      Friends.list.add(friend);
    } else {
      Friends.list.delete(friend);
    }
  }
};