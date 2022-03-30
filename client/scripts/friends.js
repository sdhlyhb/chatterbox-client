// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
//friend hashmap: {username1 => true, username2 => false}

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Map(),

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  toggleStatus: function (username) {
    //if username is friend
    if (!this._data.has(username) ) {

      this._data.set(username, true);
      //otherwise
    } else {
      //toggle
      var oldStatus = this._data.get(username);
      this._data.set(username, !oldStatus);
    }
    console.log(this._data);
  }
  // friendshipStatus: function (username) {
  //   //if username is friend
  //   if (!this._data.has(username) ) {

  //     this._data.set(username, true);
  //     //otherwise
  //   } else {
  //     //toggle
  //     var oldStatus = this._data.get(username);
  //     this._data.set(username, !oldstatus);
  //   }
  //}
};