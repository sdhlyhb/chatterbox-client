// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
//friend hashmap: {username1 => true, username2 => false}

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  toggleStatus: function (username) {
    //if username is not a friend
    if (!this._data[username]) {
      //set friend status to true
      this._data[username] = true;
      //
      //otherwise
    } else {
      //delete this person as a friend
      delete this._data[username];
    }
    console.log(this._data);
  },

  checkFriendship: function (friend) {
    return this._data[friend];
  }
};