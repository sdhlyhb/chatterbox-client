var Likes = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  //use message_id to distinguish different msgs
  toggleStatus: function (messageId) {

    if (!this._data[messageId]) {
      this._data[messageId] = true;
    } else {
      delete this._data[messageId];
    }
    console.log(this._data);
  },

  checkLikes: function (messageId) {

    return this._data[messageId] === true;
  }
};